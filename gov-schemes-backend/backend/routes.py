from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from uuid import uuid4, UUID
from typing import List

from backend.database import get_db  # Your async DB session dependency
from backend.models import Scheme  # Your SQLAlchemy model
from backend.schemas import SchemeCreate, SchemeUpdate, SchemeResponse

router = APIRouter(prefix="/schemes", tags=["schemes"])

# ------------------------------
# Get all schemes
# ------------------------------
@router.get("/", response_model=List[SchemeResponse])
async def get_schemes(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Scheme))
    schemes = result.scalars().all()
    return schemes

# ------------------------------
# Get a scheme by ID
# ------------------------------
@router.get("/{scheme_id}", response_model=SchemeResponse)
async def get_scheme(scheme_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Scheme).where(Scheme.id == scheme_id))
    scheme = result.scalar_one_or_none()
    if not scheme:
        raise HTTPException(status_code=404, detail="Scheme not found")
    return scheme

# ------------------------------
# Create a new scheme
# ------------------------------
@router.post("/", response_model=SchemeResponse)
async def create_scheme(scheme: SchemeCreate, db: AsyncSession = Depends(get_db)):
    new_scheme = Scheme(
        id=uuid4(),
        title=scheme.title,
        description=scheme.description,
        category=scheme.category,
        state=scheme.state,
        start_date=scheme.start_date,
        end_date=scheme.end_date,
        status=scheme.status,
        media=scheme.media
    )
    db.add(new_scheme)
    await db.commit()
    await db.refresh(new_scheme)
    return new_scheme

# ------------------------------
# Update a scheme
# ------------------------------
@router.put("/{scheme_id}", response_model=SchemeResponse)
async def update_scheme(scheme_id: UUID, scheme_update: SchemeUpdate, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Scheme).where(Scheme.id == scheme_id))
    scheme = result.scalar_one_or_none()
    if not scheme:
        raise HTTPException(status_code=404, detail="Scheme not found")

    # Update only provided fields
    for field, value in scheme_update.dict(exclude_unset=True).items():
        setattr(scheme, field, value)

    await db.commit()
    await db.refresh(scheme)
    return scheme

# ------------------------------
# Delete a scheme
# ------------------------------
@router.delete("/{scheme_id}", status_code=204)
async def delete_scheme(scheme_id: UUID, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Scheme).where(Scheme.id == scheme_id))
    scheme = result.scalar_one_or_none()
    if not scheme:
        raise HTTPException(status_code=404, detail="Scheme not found")

    await db.delete(scheme)
    await db.commit()
