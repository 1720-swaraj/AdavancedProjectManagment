import express from "express";
import { userLogin, userRegistration } from "../Controllers/authController.js";

export const staticRouter = express.Router();

staticRouter.route("/register").post(userRegistration);
staticRouter.route("/login").post(userLogin);
