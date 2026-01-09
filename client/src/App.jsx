import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    hours: "",
    taggedUsers: ""
  });

  /* =====================
     FETCH TASKS
  ===================== */
  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  /* =====================
     ADD TASK
  ===================== */
  const addTask = async () => {
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));

    await axios.post("http://localhost:5000/api/tasks", fd);

    setForm({
      name: "",
      description: "",
      status: "Pending",
      priority: "Medium",
      hours: "",
      taggedUsers: ""
    });

    fetchTasks();
  };

  /* =====================
     COMPLETE TASK
  ===================== */
  const completeTask = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}/complete`);
    fetchTasks();
  };

  /* =====================
     CHART CONFIG
  ===================== */
  const donutOptions = {
    cutout: "70%",
    plugins: {
      legend: { position: "bottom" }
    }
  };

  const statusData = {
    labels: ["Pending", "Completed"],
    datasets: [
      {
        data: [
          tasks.filter(t => t.status === "Pending").length,
          tasks.filter(t => t.status === "Completed").length
        ],
        backgroundColor: ["#1f6f4a", "#0b3d2e"]
      }
    ]
  };

  const priorityData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        data: [
          tasks.filter(t => t.priority === "High").length,
          tasks.filter(t => t.priority === "Medium").length,
          tasks.filter(t => t.priority === "Low").length
        ],
        backgroundColor: ["#d9534f", "#1f6f4a", "#9fd9c3"]
      }
    ]
  };

  return (
    <DashboardLayout>
      <h1 className="page-title">Task Tracker Dashboard</h1>

      <div className="dashboard-grid">

        {/* =====================
            LEFT – ADD TASK
        ===================== */}
        <div className="add-task-card">
          <h3>Add New Task</h3>

          <input
            placeholder="Task name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />

          <div className="row">
            <select
              value={form.status}
              onChange={e => setForm({ ...form, status: e.target.value })}
            >
              <option>Pending</option>
              <option>Completed</option>
            </select>

            <select
              value={form.priority}
              onChange={e => setForm({ ...form, priority: e.target.value })}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <input
            type="number"
            placeholder="Hours spent (optional)"
            value={form.hours}
            onChange={e => setForm({ ...form, hours: e.target.value })}
          />

          <input
            placeholder="Tagged users (comma separated, optional)"
            value={form.taggedUsers}
            onChange={e => setForm({ ...form, taggedUsers: e.target.value })}
          />

          <button className="primary-btn" onClick={addTask}>
            Add Task
          </button>
        </div>

        {/* =====================
            RIGHT – TASKS + CHARTS
        ===================== */}
        <div className="right-column">

          {/* TASK LIST */}
          <div className="task-list">
            <h3>Tasks</h3>

            {tasks.map(t => (
              <div key={t._id} className="task-card">

                {/* TITLE */}
                <h4>{t.name}</h4>

                {/* DESCRIPTION */}
                {t.description && (
                  <p className="task-desc">{t.description}</p>
                )}

                {/* DETAILS */}
                <div className="task-details">
                  <span><b>Status:</b> {t.status}</span>
                  <span><b>Priority:</b> {t.priority}</span>

                  {/* OPTIONAL HOURS */}
                  {t.hours && (
                    <span><b>Hours:</b> {t.hours}</span>
                  )}

                  {/* OPTIONAL TAGGED USERS */}
                  {t.taggedUsers && t.taggedUsers.length > 0 && (
                    <span>
                      <b>Tagged:</b> {t.taggedUsers.join(", ")}
                    </span>
                  )}
                </div>

                {/* ACTION */}
                {t.status !== "Completed" && (
                  <button
                    className="secondary-btn"
                    onClick={() => completeTask(t._id)}
                  >
                    Mark Completed
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CHARTS */}
          <div className="charts-row">
            <div className="chart-card">
              <h4>Status</h4>
              <Pie data={statusData} options={donutOptions} />
            </div>

            <div className="chart-card">
              <h4>Priority</h4>
              <Pie data={priorityData} options={donutOptions} />
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
