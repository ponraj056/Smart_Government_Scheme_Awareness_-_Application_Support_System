from fastapi import FastAPI, HTTPException, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from backend.database import async_session, init_db
from backend.models import Scheme
from backend.schemas import SchemeCreate, SchemeUpdate, SchemeResponse
from typing import List, Optional
from uuid import UUID
from datetime import date, datetime

app = FastAPI(title="Government Schemes API")

# -------------------- Dependency --------------------
async def get_session() -> AsyncSession:
    async with async_session() as session:
        yield session

# -------------------- Startup --------------------
@app.on_event("startup")
async def startup_event():
    await init_db()

# -------------------- CRUD Endpoints --------------------

# Create Scheme
@app.post("/schemes/", response_model=SchemeResponse)
async def create_scheme(scheme: SchemeCreate, session: AsyncSession = Depends(get_session)):
    new_scheme = Scheme(**scheme.dict())
    session.add(new_scheme)
    await session.commit()
    await session.refresh(new_scheme)
    return new_scheme

# Get All Schemes (active only + optional filters)
@app.get("/schemes/", response_model=List[SchemeResponse])
async def get_schemes(
    state: Optional[str] = Query(None),
    category: Optional[str] = Query(None),
    session: AsyncSession = Depends(get_session)
):
    result = await session.execute(select(Scheme))
    schemes = result.scalars().all()

    today = date.today()
    valid_schemes = []

    # Convert string dates to datetime.date (if necessary)
    for s in schemes:
        start = s.start_date
        end = s.end_date

        if isinstance(start, str):
            try:
                start = datetime.strptime(start, "%Y-%m-%d").date()
            except ValueError:
                continue

        if isinstance(end, str):
            try:
                end = datetime.strptime(end, "%Y-%m-%d").date()
            except ValueError:
                continue

        if start <= today <= end:
            valid_schemes.append(s)

    # Apply optional filters
    if state:
        valid_schemes = [s for s in valid_schemes if s.state == state]
    if category:
        valid_schemes = [s for s in valid_schemes if s.category == category]

    return valid_schemes

# Get Scheme by ID
@app.get("/schemes/{scheme_id}", response_model=SchemeResponse)
async def get_scheme(scheme_id: UUID, session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Scheme).where(Scheme.id == scheme_id))
    scheme = result.scalar_one_or_none()
    if not scheme:
        raise HTTPException(status_code=404, detail="Scheme not found")
    return scheme

# Update Scheme
@app.put("/schemes/{scheme_id}", response_model=SchemeResponse)
async def update_scheme(scheme_id: UUID, scheme_update: SchemeUpdate, session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Scheme).where(Scheme.id == scheme_id))
    scheme = result.scalar_one_or_none()
    if not scheme:
        raise HTTPException(status_code=404, detail="Scheme not found")

    # Update only provided fields
    for key, value in scheme_update.dict(exclude_unset=True).items():
        setattr(scheme, key, value)

    session.add(scheme)
    await session.commit()
    await session.refresh(scheme)
    return scheme

# Delete Scheme
@app.delete("/schemes/{scheme_id}")
async def delete_scheme(scheme_id: UUID, session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Scheme).where(Scheme.id == scheme_id))
    scheme = result.scalar_one_or_none()
    if not scheme:
        raise HTTPException(status_code=404, detail="Scheme not found")

    await session.delete(scheme)
    await session.commit()
    return {"detail": "Scheme deleted successfully"}

# Root Endpoint
@app.get("/")
async def root():
    return {"message": "Government Schemes API is running!"}
