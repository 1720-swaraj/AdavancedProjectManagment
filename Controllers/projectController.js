import mongoose from "mongoose";
import { projectSchema } from "../Models/projectSchema.js";
import { usersSchema } from "../Models/usersSchema.js";

//-------------------->> Create Project
export const createProject = async (req, res) => {
  try {
    const { projectName, description, manager, team } = req.body;
    const projectManager = await usersSchema.findById(manager);
    if (!projectManager || projectManager.role !== "Project Manager") {
      return res.status(404).json({ message: "Invalid credentials!!" });
    }
    const newProject = await projectSchema.create({
      projectName,
      description,
      manager,
      team,
    });
    return res
      .status(200)
      .json({ message: "new project Created", project: newProject });
  } catch (error) {
    return res.status(404).json({ message: "failed to create project", error });
  }
};

//-------------------->>Get Project

export const getProject = async (req, res) => {
  try {
    const projects = await projectSchema
      .find({})
      .populate("manager")
      .populate("team");
    return res.status(200).json({ projects: projects });
  } catch (error) {
    return res.status(404).json({ message: "failed to get project", error });
  }
};
