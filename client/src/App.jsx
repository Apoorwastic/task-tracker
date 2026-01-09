import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

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
    const payload = {
      ...form,
      taggedUsers: form.taggedUsers
        ? form.taggedUsers.split(",").map(u => u.trim())
        : []
    };

    await axios.post("http://localhost:5000/api/tasks", payload);

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
     UPDATE TASK
  ===================== */
  const updateTask = async () => {
    await axios.put(
      `http://localhost:5000/api/tasks/${selectedTask._id}`,
      {
        ...selectedTask,
        taggedUsers:
          typeof selectedTask.taggedUsers === "string"
            ? selectedTask.taggedUsers.split(",").map(u => u.trim())
            : selectedTask.taggedUsers
      }
    );

    setSelectedTask(null);
    fetchTasks();
  };

  /* =====================
     DELETE TASK
  ===================== */
  const deleteTask = async () => {
    await axios.delete(
      `http://localhost:5000/api/tasks/${selectedTask._id}`
    );

    setSelectedTask(null);
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
     CHART DATA
  ===================== */
  const donutOptions = {
    cutout: "70%",
    plugins: { legend: { position: "bottom" } }
  };

  const statusData = {
    labels: ["Pending", "Completed"],
    datasets: [{
      data: [
        tasks.filter(t => t.status === "Pending").length,
        tasks.filter(t => t.status === "Completed").length
      ],
      backgroundColor: ["#1f6f4a", "#0b3d2e"]
    }]
  };

  const priorityData = {
    labels: ["High", "Medium", "Low"],
    datasets: [{
      data: [
        tasks.filter(t => t.priority === "High").length,
        tasks.filter(t => t.priority === "Medium").length,
        tasks.filter(t => t.priority === "Low").length
      ],
      backgroundColor: ["#d9534f", "#1f6f4a", "#9fd9c3"]
    }]
  };

  return (
    <DashboardLayout>
      <h1 className="page-title">Task Tracker Dashboard</h1>

      <div className="dashboard-grid">

        {/* ADD TASK */}
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

        {/* TASKS + CHARTS */}
        <div className="right-column">

          <div className="task-list">
            <h3>Tasks</h3>

            {tasks.map(t => (
              <div
                key={t._id}
                className="task-card"
                onClick={() => setSelectedTask({ ...t })}
              >
                <h4>{t.name}</h4>

                {t.description && (
                  <p className="task-desc">{t.description}</p>
                )}

                <div className="task-details">
                  <span><b>Status:</b> {t.status}</span>
                  <span><b>Priority:</b> {t.priority}</span>

                  {t.hours && <span><b>Hours:</b> {t.hours}</span>}
                  {t.taggedUsers?.length > 0 && (
                    <span><b>Tagged:</b> {t.taggedUsers.join(", ")}</span>
                  )}
                </div>

                {t.status !== "Completed" && (
                  <button
                    className="secondary-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      completeTask(t._id);
                    }}
                  >
                    Mark Completed
                  </button>
                )}
              </div>
            ))}
          </div>

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

      {/* =====================
          EDIT / DELETE MODAL
      ===================== */}
      {selectedTask && (
        <div className="modal-overlay" onClick={() => setSelectedTask(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Edit Task</h3>

            <input
              value={selectedTask.name}
              onChange={e =>
                setSelectedTask({ ...selectedTask, name: e.target.value })
              }
            />

            <textarea
              value={selectedTask.description || ""}
              onChange={e =>
                setSelectedTask({
                  ...selectedTask,
                  description: e.target.value
                })
              }
            />

            <div className="row">
              <select
                value={selectedTask.status}
                onChange={e =>
                  setSelectedTask({ ...selectedTask, status: e.target.value })
                }
              >
                <option>Pending</option>
                <option>Completed</option>
              </select>

              <select
                value={selectedTask.priority}
                onChange={e =>
                  setSelectedTask({
                    ...selectedTask,
                    priority: e.target.value
                  })
                }
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <input
              type="number"
              placeholder="Hours"
              value={selectedTask.hours || ""}
              onChange={e =>
                setSelectedTask({ ...selectedTask, hours: e.target.value })
              }
            />

            <input
              placeholder="Tagged users"
              value={
                Array.isArray(selectedTask.taggedUsers)
                  ? selectedTask.taggedUsers.join(", ")
                  : selectedTask.taggedUsers || ""
              }
              onChange={e =>
                setSelectedTask({
                  ...selectedTask,
                  taggedUsers: e.target.value
                })
              }
            />

            <div className="modal-actions">
              <button className="primary-btn" onClick={updateTask}>
                Update
              </button>

              <button className="danger-btn" onClick={deleteTask}>
                Delete
              </button>

              <button
                className="secondary-btn"
                onClick={() => setSelectedTask(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
