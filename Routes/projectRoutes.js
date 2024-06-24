import express from "express";
import { createProject, delProject, getProject } from "../Controllers/projectController.js";

export const projectRouter = express.Router();

projectRouter.route("/").post(createProject);
projectRouter.route("/").get(getProject);
projectRouter.route("/delete/:id").delete(delProject);

