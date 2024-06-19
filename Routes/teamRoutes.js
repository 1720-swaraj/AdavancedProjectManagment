import express from "express";
import { createTeam, getTeams } from "../Controllers/teamController.js";

export const teamRouter = express.Router();

teamRouter.route("/createTeam").post(createTeam);
teamRouter.route("/getTeams").post(getTeams);
