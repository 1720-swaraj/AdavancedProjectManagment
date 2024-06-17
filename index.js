import mongoose from "mongoose";
import express from "express";
import cors from 'cors'
import "dotenv/config";
import { dbConnection } from "./DataBaseConnection/dbConnection.js";
const app = express();

//database connection
dbConnection();

//middleware
app.use(express.json());
app.use(cors());

//connection
app.listen(process.env.PORT, () => {
  console.log(`listning to ${process.env.PORT}`);
});
