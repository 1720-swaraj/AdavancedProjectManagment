import express from "express";
import {
  enterTimeEntries,
  getTimeEntries,
} from "../Controllers/timeEntriesController.js";

export const timeEntriesRouter = express.Router();

timeEntriesRouter.route("/").post(enterTimeEntries);
timeEntriesRouter.route("/").get(getTimeEntries);
