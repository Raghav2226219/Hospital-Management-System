# Hospital-Management-System
MERN Project 

# 🏥 Hospital Management System (MERN + Tailwind CSS)

A full-stack healthcare management system built with **MongoDB, MySQL, Express.js, React, and Node.js**. This system provides patient management, doctor appointment scheduling, pharmacy & blood bank management, real-time chat, and job portal functionalities.

## 🚀 Features

### ✅ **Phase 1: Project Setup & Authentication**
- MERN Stack setup with **MongoDB + MySQL**
- JWT-based authentication (Login, Signup, Logout)
- Role-Based Access Control (RBAC)
- OTP verification for users

### ✅ **Phase 2: Patient & Doctor Management**
- Doctor Dashboard (View appointments, prescribe medicine)
- Patient Dashboard (Book appointments, view history)
- Appointment Scheduling system
- Medical Record System (CRUD APIs)
- WebSocket-based **real-time chat system**
- Admin panel for doctor verification

### ✅ **Phase 3: Blood Bank Management**
- Blood Donor Registration
- Blood Request System
- Search available donors & blood banks
- Real-time **notifications for nearby donors**
- Blood Inventory Management

### ✅ **Phase 4: Pharmacy & Lab Management**
- Medicine ordering system
- Prescription Management (Doctors upload, patients view)
- Lab Test Booking & Lab Report Upload (PDF/Image)

### ✅ **Phase 5: Job Portal for Healthcare Professionals**
- Job posting system for hospitals
- Job search & filtering (By hospital, role, experience)
- Job application for doctors & nurses
- HR Dashboard (Shortlist, reject candidates)
- Resume Builder (Auto-generate PDFs)

### ✅ **Phase 6: Security, Testing & Deployment**
- **Data Encryption for sensitive data**
- **API Rate Limiting & CSRF Protection**
- **Unit Testing (Jest, Mocha)**
- Deployment (AWS, Vercel, Netlify)
- **Docker support** for containerized deployment

### 🔜 **Future Enhancements**
- **AI-based Symptom Checker** for self-diagnosis
- **Blockchain-based Medical Records** for data security
- **IoT Integration** for real-time health monitoring
- **Fingerprint Authentication** for admin login

---

## ⚙️ **Installation & Setup**

### 📌 1️⃣ **Backend Setup**
```sh
cd backend
npm install
npm start  # Runs the backend server


Backend

npm install express cors dotenv helmet compression morgan
npm install mongoose mysql2 sequelize
npm install jsonwebtoken bcryptjs express-rate-limit
npm install nodemailer speakeasy qrcode
npm install socket.io stripe
npm install --save-dev nodemon eslint jest supertest


Frontend

cd frontend
npm install
npm run dev  # Starts the frontend server


Frontend Dependencies

npm install axios react-router-dom react-icons
npm install -D tailwindcss postcss autoprefixer
npm install react-hook-form yup redux react-redux @reduxjs/toolkit
npm install socket.io-client

## 📂 Folder Structure

Hospital-Management-System/
├── backend/               # Express.js (Node.js) Backend
│   ├── config/            # DB Configurations (MySQL + MongoDB)
│   ├── controllers/       # API Controllers
│   ├── models/            # Database Models (Mongoose + Sequelize)
│   ├── routes/            # Express API Routes
│   ├── middlewares/       # Authentication, Logging, Validation
│   ├── services/          # Business Logic
│   ├── utils/             # Utility Functions
│   ├── index.js           # Main server entry point
│   ├── package.json       # Backend Dependencies
│
├── frontend/              # React + Tailwind Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI Components
│   │   ├── pages/         # Main App Pages
│   │   ├── redux/         # State Management
│   │   ├── services/      # API Calls (Axios)
│   │   ├── App.js         # Main App Component
│   │   ├── main.jsx       # React Entry Point
│   │
│   ├── public/            # Static Assets
│   ├── tailwind.config.js # Tailwind Configuration
│   ├── package.json       # Frontend Dependencies
│
├── README.md              # Project Documentation



🛠️ Tech Stack

Frontend: React.js, Redux, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB + MySQL
Authentication: JWT + OTP
Real-time: WebSockets (Socket.io)
Deployment: AWS, Vercel, Netlify
Testing: Jest, Mocha
Security: API Rate Limiting, CSRF Protection, Encryption


Email:- raghav2004kaushal@gmail.com

Github:- https://github.com/Raghav2226219