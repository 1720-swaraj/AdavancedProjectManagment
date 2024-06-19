import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnection } from "./DataBaseConnection/dbConnection.js";
import { staticRouter } from "./Routes/staticRoutes.js";
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
app.use("/api", staticRouter);
//------------------->>connection
app.listen(process.env.PORT, () => {
  console.log(`listning to ${process.env.PORT}`);
});
