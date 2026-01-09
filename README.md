# 📝 Task Tracker Dashboard (MERN Stack)

A **modern, professional Task Tracker Dashboard** built using the **MERN stack** (MongoDB, Express, React, Node.js). This application allows users to create, manage, and visualize tasks with a clean UI and real-time charts.

## 📸 Screenshots

> 📌 Add screenshots inside a `screenshots/` folder in the root of this repo.

```md
screenshots/
 ├── 01-dashboard.png
 ├── 02-add-task.png
 ├── 03-task-details.png
 ├── 04-charts.png
```
### LOGIN
<img width="1916" height="898" alt="login" src="https://github.com/user-attachments/assets/fa6c1d29-6a9d-4323-89bf-dd8511c8aef7" />

### Dashboard Overview
<img width="1917" height="908" alt="Dashboard" src="https://github.com/user-attachments/assets/e4fa00d9-90cf-4865-9dda-832e8bb85ac6" />

### Add New Task
<img width="565" height="811" alt="add" src="https://github.com/user-attachments/assets/e9871502-34e9-4878-81cf-3de4cb49d21a" />

### Task Details (with optional fields)
<img width="1918" height="898" alt="display" src="https://github.com/user-attachments/assets/274ef4e3-eba6-4113-9b17-95e9015bfbc3" />

### Update and Delete Tasks
<img width="1918" height="892" alt="updateDEL" src="https://github.com/user-attachments/assets/5a111ee3-5686-4e4e-829c-9366c9c96db3" />

### Status & Priority Charts
<img width="1912" height="896" alt="DELandUP" src="https://github.com/user-attachments/assets/0a6619e7-55e7-45c3-b9b2-baa952fad862" />


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


## 🧠 Notes

* Optional fields (Hours, Tagged Users) are shown **only if provided**
* UI follows a clean, professional dashboard design
* Code is modular and easy to extend

---

## 👤 Author

**Apoorwa**
GitHub: [https://github.com/Apoorwastic](https://github.com/Apoorwastic)

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!
