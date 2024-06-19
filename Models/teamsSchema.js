import mongoose from "mongoose";

const team = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export const teamsSchema = mongoose.model("Teams", team);
