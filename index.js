import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnection } from "./DataBaseConnection/dbConnection.js";
import { staticRouter } from "./Routes/staticRoutes.js";
import { projectRouter } from "./Routes/projectRoutes.js";
import { taskRouter } from "./Routes/taskRoutes.js";
import { teamRouter } from "./Routes/teamRoutes.js";
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
app.use(express.json());
app.use(cors());
//------------------>>Routes
app.use("/api/auth", staticRouter);
app.use("/api/project", projectRouter);
app.use("/api/task",taskRouter)
app.use("/api/team",teamRouter)
//------------------->>connection
app.listen(process.env.PORT, () => {
  console.log(`listning to ${process.env.PORT}`);
});
