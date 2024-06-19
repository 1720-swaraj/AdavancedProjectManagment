import express from "express";
import { userRegistration } from "../Controllers/authController.js";

export const staticRouter = express.Router();

staticRouter.route("/register").post(userRegistration);
