import express from "express";
import { createTask, getTask } from "../Controllers/taskController.js";

export const taskRouter = express.Router();
taskRouter.route("/").post(createTask);
taskRouter.route("/").get(getTask);
