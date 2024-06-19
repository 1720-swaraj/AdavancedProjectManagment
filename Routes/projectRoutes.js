import express from "express";
import { createProject, getProject } from "../Controllers/projectController.js";

export const projectRouter = express.Router();

projectRouter.route("/createProjects").post(createProject);
projectRouter.route("/getProjects").get(getProject);
