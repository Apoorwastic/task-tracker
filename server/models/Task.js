import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    status: { type: String, default: "Pending" },
    priority: { type: String, default: "Medium" },
    hours: Number,
    taggedUsers: [String]
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
