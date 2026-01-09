import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import taskRoutes from "./routes/tasks.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/tasktracker")
  .then(() => console.log("MongoDB connected"));

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
