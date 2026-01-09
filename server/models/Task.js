
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
  priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
  hours: Number,
  taggedUsers: [String],
  media: String
}, { timestamps: true });

export default mongoose.model("Task", TaskSchema);
