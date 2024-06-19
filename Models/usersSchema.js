import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Project Manager", "Team Member"],
    required: true,
  },
});

export const usersSchema = mongoose.model("User", user);
