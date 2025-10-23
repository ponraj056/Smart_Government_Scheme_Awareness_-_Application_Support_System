# Citizen Scheme Awareness Backend

## 📘 Overview
This project is a **backend system for a citizen-centric application** that helps users discover, understand, and apply for active government welfare schemes easily.  
It automatically filters expired schemes, supports multiple languages, integrates awareness videos, and sends notifications before deadlines.

---

## 🎯 Project Goals
- Simplify access to government schemes for citizens.
- Show **only active and valid schemes** by removing expired entries automatically.
- Provide **easy-to-read descriptions** with eligibility, required documents, and step-by-step application guides.
- Enable **multilingual support** (English + regional languages).
- Deliver **awareness videos and visual workflows**.
- Send **push notifications** for upcoming deadlines.
- Strengthen e-governance through transparency and inclusivity.

---

## 🧱 Tech Stack
- **Backend Framework:** FastAPI (Python)
- **Database:** PostgreSQL
- **Cache & Queue:** Redis + Celery
- **Storage:** AWS S3 (for media)
- **Containerization:** Docker & Docker Compose
- **Authentication:** JWT

---

## 🚀 Setup (for development)
```bash
# 1. Clone this repository
git clone https://github.com/<your-username>/gov-schemes-backend.git
cd gov-schemes-backend

# 2. Run containers (DB, Redis, API)
docker compose up --build

# 3. Open API docs
http://localhost:8000/docs
