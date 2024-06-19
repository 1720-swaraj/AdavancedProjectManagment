import express from "express";
import { createTeam, getTeams } from "../Controllers/teamController.js";

export const teamRouter = express.Router();

teamRouter.route("/").post(createTeam);
teamRouter.route("/").post(getTeams);
