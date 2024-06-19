import mongoose from "mongoose";

export const dbConnection = async (req, res) => {
  try {
    return await mongoose.connect(process.env.DATABASE_STRING);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
