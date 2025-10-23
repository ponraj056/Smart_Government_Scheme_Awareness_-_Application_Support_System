import asyncio
import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy.pool import NullPool
from sqlalchemy import text
import asyncpg

# ---------------------------------------------------------
# Base class for all models
# ---------------------------------------------------------
Base = declarative_base()

# ---------------------------------------------------------
# Detect environment: inside Docker or local
# ---------------------------------------------------------
# Try to auto-select host based on environment
HOST = os.getenv("DB_HOST", "127.0.0.1")  # default local
if os.path.exists("/.dockerenv"):
    HOST = "gov-db"  # running inside Docker container
elif "docker" in os.getenv("HOSTNAME", "").lower():
    HOST = "host.docker.internal"  # if host has docker context

# ---------------------------------------------------------
# Database URL
# ---------------------------------------------------------
DATABASE_URL = f"postgresql+asyncpg://postgres:postgres@{HOST}:5432/gov_schemes"

# ---------------------------------------------------------
# Async Engine and Session
# ---------------------------------------------------------
engine = create_async_engine(
    DATABASE_URL,
    echo=True,
    poolclass=NullPool  # prevents connection reuse issues
)

async_session = sessionmaker(
    engine,
    expire_on_commit=False,
    class_=AsyncSession
)

# ---------------------------------------------------------
# Initialize the database (create tables)
# ---------------------------------------------------------
async def init_db():
    try:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        print("✅ Database initialization successful.")
    except Exception as e:
        print("❌ Database initialization failed:", e)

# ---------------------------------------------------------
# SQLAlchemy-based DB Connection Test
# ---------------------------------------------------------
async def test_sqlalchemy_connection():
    try:
        async with async_session() as session:
            result = await session.execute(text("SELECT 1"))
            print("✅ SQLAlchemy DB Connection Test Passed:", result.scalar())
    except Exception as e:
        print("❌ SQLAlchemy DB Connection Failed:", e)

# ---------------------------------------------------------
# Direct asyncpg DB Connection Test (for debugging)
# ---------------------------------------------------------
async def test_asyncpg_connection():
    try:
        conn = await asyncpg.connect(
            user='postgres',
            password='postgres',
            database='gov_schemes',
            host=HOST,
            port=5432
        )
        result = await conn.fetch("SELECT 1")
        print("✅ asyncpg DB Connection Test Passed:", result)
        await conn.close()
    except Exception as e:
        print("❌ asyncpg DB Connection Failed:", e)

# ---------------------------------------------------------
# Run tests when executed directly
# ---------------------------------------------------------
if __name__ == "__main__":
    asyncio.run(init_db())
    asyncio.run(test_sqlalchemy_connection())
    asyncio.run(test_asyncpg_connection())
