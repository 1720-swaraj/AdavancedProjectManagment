import mongoose from "mongoose";

export const dbConnection = async (req, res) => {
  try {
    return await mongoose
      .connect(process.env.DATABASE_STRING)
      .then(() => {
        console.log("connected succesfully");
      })
      .catch(() => {
        console.log("not connected");
      });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
