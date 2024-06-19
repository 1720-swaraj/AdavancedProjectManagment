import express from "express";
import { createProject, getProject } from "../Controllers/projectController.js";

export const projectRouter = express.Router();

projectRouter.route("/").post(createProject);
projectRouter.route("/").get(getProject);
