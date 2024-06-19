import express from "express";
import { createTask, getTask } from "../Controllers/taskController.js";

export const taskRouter = express.Router();
taskRouter.route("/createTask").post(createTask);
taskRouter.route("/getTask").get(getTask);
