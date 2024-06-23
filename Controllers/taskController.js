import mongoose from "mongoose";
import { taskSchema } from "../Models/taskSchema.js";

//------------------------>>Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description, project, assignee } = req.body;
    const newTask = await taskSchema.create({
      title,
      description,
      project,
      assignee,
    });
    return res
      .status(200)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    return res.status(400).json({ message: "Failed to create task", error });
  }
};

//------------------------->>Get all Task
export const getTask = async (req, res) => {
  try {
    const tasks = await taskSchema
      .find()
      .populate("project")
      .populate("assignee");
    return res.status(200).json({ tasks: tasks });
  } catch (error) {
    return res.status(500).json({ message: "Failed to get tasks", error });
  }
};
