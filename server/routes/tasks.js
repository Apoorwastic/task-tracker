
import express from "express";
import Task from "../models/Task.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/", upload.single("media"), async (req, res) => {
  const task = new Task({
    ...req.body,
    taggedUsers: req.body.taggedUsers?.split(",") || [],
    media: req.file?.path
  });
  await task.save();
  res.json(task);
});

router.put("/:id/complete", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: "Completed" },
    { new: true }
  );
  res.json(task);
});

export default router;
