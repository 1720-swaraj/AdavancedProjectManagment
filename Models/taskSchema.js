import mongoose from "mongoose";

const task = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    requiured: true,
  },
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  timeEntries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TimeEntry",
    },
  ],
});

export const taskSchema = mongoose.model("Task", task);
