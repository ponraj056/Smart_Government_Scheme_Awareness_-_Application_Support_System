from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import update, delete
from typing import List, Optional
from uuid import UUID

from .models import Scheme
from .schemas import SchemeCreate, SchemeUpdate

# ------------------------
# CREATE a new scheme
# ------------------------
async def create_scheme(db: AsyncSession, scheme: SchemeCreate) -> Scheme:
    new_scheme = Scheme(**scheme.dict())
    db.add(new_scheme)
    await db.commit()
    await db.refresh(new_scheme)
    return new_scheme

# ------------------------
# READ all schemes (optional filtering by state/category)
# ------------------------
async def get_schemes(db: AsyncSession, state: Optional[str] = None, category: Optional[str] = None) -> List[Scheme]:
    query = select(Scheme)
    if state:
        query = query.filter(Scheme.state == state)
    if category:
        query = query.filter(Scheme.category == category)
    result = await db.execute(query)
    return result.scalars().all()

# ------------------------
# READ a single scheme by ID
# ------------------------
async def get_scheme(db: AsyncSession, scheme_id: UUID) -> Optional[Scheme]:
    result = await db.execute(select(Scheme).where(Scheme.id == scheme_id))
    return result.scalar_one_or_none()

# ------------------------
# UPDATE a scheme
# ------------------------
async def update_scheme(db: AsyncSession, scheme_id: UUID, scheme_data: SchemeUpdate) -> Optional[Scheme]:
    scheme = await get_scheme(db, scheme_id)
    if not scheme:
        return None
    for key, value in scheme_data.dict(exclude_unset=True).items():
        setattr(scheme, key, value)
    await db.commit()
    await db.refresh(scheme)
    return scheme

# ------------------------
# DELETE a scheme
# ------------------------
async def delete_scheme(db: AsyncSession, scheme_id: UUID) -> bool:
    scheme = await get_scheme(db, scheme_id)
    if not scheme:
        return False
    await db.delete(scheme)
    await db.commit()
    return True
