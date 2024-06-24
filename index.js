import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnection } from "./DataBaseConnection/dbConnection.js";
import { staticRouter } from "./Routes/staticRoutes.js";
import { projectRouter } from "./Routes/projectRoutes.js";
import { taskRouter } from "./Routes/taskRoutes.js";
import { teamRouter } from "./Routes/teamRoutes.js";
import { timeEntriesRouter } from "./Routes/timeEntriesRoutes.js";
import { usersRouter } from "./Routes/userRoutes.js";
import cookieParser from "cookie-parser";
const app = express();

//----------------->>database connection
dbConnection()
  .then(() => {
    console.log("connected succesfully");
  })
  .catch(() => {
    console.log("not connected");
  });

//------------------>>middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors());

//------------------>>Routes
app.use("/api/auth", staticRouter);
app.use("/api/users", usersRouter);
app.use("/api/project", projectRouter);
app.use("/api/task", taskRouter);
app.use("/api/team", teamRouter);
app.use("/api/timeEntries", timeEntriesRouter);
//------------------->>connection
app.listen(process.env.PORT, () => {
  console.log(`listning to ${process.env.PORT}`);
});
