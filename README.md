# Smart Schemes Web Application

A MERN-stack (MongoDB, Express, React, Node.js) project designed for **Government Scheme Awareness and Application**.  
Users can register, verify their account via email, log in, and view tailored government schemes in a multilingual interface.

---

## 🚀 Features
- **User Registration & Email Verification**
- **Secure Login System (JWT)**
- **Scheme Filtering by Deadline**
- **Profile-Based Perfect Match Recommendations**
- **Indian Language Switching (English, Hindi, Tamil)**
- **Scheme Detail Pages with Layman-Friendly Steps**
- **YouTube Integration for Scheme Tutorials**
- **Application Submission Flow**

---

## 🧩 Folder Structure
```
smart-schemes/
├─ backend/
│  ├─ package.json
│  ├─ .env.example
│  ├─ server.js
│  ├─ config/
│  ├─ models/
│  ├─ routes/
│  └─ seed.js
└─ frontend/
   ├─ package.json
   ├─ public/
   └─ src/
      ├─ index.js
      ├─ App.js
      ├─ i18n.js
      ├─ services/
      ├─ pages/
      └─ components/
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone or Extract Project
```bash
unzip smart-schemes.zip
cd smart-schemes
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with MongoDB and Email credentials
npm run seed   # Optional: seed example schemes
npm start
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

Open your browser at **http://localhost:3000**.

---

## 🧠 Tech Stack
- **Frontend:** React.js, HTML, CSS, i18next
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Email:** Nodemailer (SMTP)
- **Auth:** JWT
- **Localization:** i18next multi-language support

---

## 📧 Environment Variables (backend/.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/smartschemes
JWT_SECRET=mysecret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:3000
```

---

## 💡 Future Enhancements
- Voice assistant for accessibility
- SMS deadline reminders
- API integration with UMANG / myScheme portals
- Admin dashboard for scheme management

---

## 🧾 License
MIT License © 2025 Ponrajdr
