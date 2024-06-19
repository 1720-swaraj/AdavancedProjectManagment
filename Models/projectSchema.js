import mongoose from "mongoose";
const project = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  team: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const projectSchema = mongoose.model("Project", project);
