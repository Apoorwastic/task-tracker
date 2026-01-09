# 📝 Task Tracker Dashboard (MERN Stack)

A **modern, professional Task Tracker Dashboard** built using the **MERN stack** (MongoDB, Express, React, Node.js). This application allows users to create, manage, and visualize tasks with a clean UI and real-time charts.

---

## 🚀 Live Demo

* **Frontend (Netlify):** *Add your Netlify URL here*
* **Backend (Render):** *Add your Render API URL here*

---

## 📸 Screenshots

> 📌 Add screenshots inside a `screenshots/` folder in the root of this repo.

```md
screenshots/
 ├── 01-dashboard.png
 ├── 02-add-task.png
 ├── 03-task-details.png
 ├── 04-charts.png
```

### Dashboard Overview

![Dashboard](<img width="1918" height="742" alt="Dashboard" src="https://github.com/user-attachments/assets/a2b5bf9c-c449-442a-98be-6ad89ae3151d" />
)

### Add New Task

![Add Task](<img width="676" height="688" alt="add" src="https://github.com/user-attachments/assets/7a5ac441-b218-4436-8076-5a9bb8ba514f" />
)

### Task Details (with optional fields)

![Task Details](<img width="1207" height="806" alt="display" src="https://github.com/user-attachments/assets/bcd4a492-ab35-450e-938f-e943dcf1e6c5" />
)

### Status & Priority Charts

![Charts](![Uploading tt.png…]()
)

---

## ✨ Features

* ➕ Add new tasks with:

  * Name & Description
  * Status (Pending / Completed)
  * Priority (High / Medium / Low)
  * Optional Hours Spent
  * Optional Tagged Users
* 📋 View all tasks in a clean card-based layout
* ✅ Mark tasks as completed
* 📊 Visual analytics using **donut charts**:

  * Task Status Distribution
  * Task Priority Distribution
* 🎨 Modern, responsive dashboard UI

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Axios
* Chart.js + react-chartjs-2
* Custom CSS (Dashboard UI)

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* Multer (media-ready support)

### Deployment

* Frontend: **Netlify**
* Backend: **Render**
* Database: **MongoDB Atlas**

---

## 📂 Project Structure

```
Task-tracker/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.css
│   ├── public/
│   │   └── _redirects
│   ├── index.html
│   └── vite.config.js
│
├── server/                # Node/Express backend
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Local Setup (Run Locally)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Apoorwastic/task-tracker.git
cd task-tracker
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

Run backend:

```bash
npm start
```

Backend runs at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🌍 Deployment Guide

### Backend (Render)

1. Create a **Web Service** on Render
2. Connect GitHub repository
3. Select `server` directory
4. Set:

   * Build Command: `npm install`
   * Start Command: `npm start`
5. Add Environment Variable:

   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   ```

---

### Frontend (Netlify)

1. Go to Netlify → Add New Site → Import from GitHub
2. Select repository
3. Configure:

   * **Base directory:** `client`
   * **Build command:** `npm run build`
   * **Publish directory:** `client/dist`
4. Add `_redirects` file in `client/public`:

   ```
   /*  /index.html  200
   ```

---

## 🧠 Notes

* Optional fields (Hours, Tagged Users) are shown **only if provided**
* UI follows a clean, professional dashboard design
* Code is modular and easy to extend

---

## 👤 Author

**Apoorwa Priyam**
GitHub: [https://github.com/Apoorwastic](https://github.com/Apoorwastic)

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!
