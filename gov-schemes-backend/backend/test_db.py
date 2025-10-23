from sqlalchemy import text

async def test_db_connection():
    try:
        async with async_session() as session:
            result = await session.execute(text("SELECT 1"))
            print("✅ DB Connection Test Passed:", result.scalar())
    except Exception as e:
        print("❌ DB Connection Failed:", e)
