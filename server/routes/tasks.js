import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

/* =====================
   GET ALL TASKS
===================== */
router.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

/* =====================
   ADD TASK
===================== */
router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

/* =====================
   MARK COMPLETE
===================== */
router.put("/:id/complete", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: "Completed" },
    { new: true }
  );
  res.json(task);
});

/* =====================
   UPDATE TASK
===================== */
router.put("/:id", async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* =====================
   DELETE TASK
===================== */
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;
