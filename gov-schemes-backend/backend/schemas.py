from pydantic import BaseModel
from datetime import date
from uuid import UUID
from typing import Optional

# -------------------------------
# Input schema for creating a scheme
# -------------------------------
class SchemeCreate(BaseModel):
    title: str
    description: Optional[str] = None
    category: str
    state: str
    start_date: date
    end_date: date
    status: Optional[str] = None
    media: Optional[str] = None

# -------------------------------
# Input schema for updating a scheme
# -------------------------------
class SchemeUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    category: Optional[str] = None
    state: Optional[str] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    status: Optional[str] = None
    media: Optional[str] = None

# -------------------------------
# Response schema for returning a scheme
# -------------------------------
class SchemeResponse(SchemeCreate):
    id: UUID
    created_at: Optional[date] = None
    updated_at: Optional[date] = None

    class Config:
        orm_mode = True  # <-- required to work with SQLAlchemy models
