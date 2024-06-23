import { usersSchema } from "../Models/usersSchema.js";

export const getUsers = async (req, res) => {
  try {
    const getUser = await usersSchema.find();
    return res.status(200).json({ message: "all users", users: getUser });
  } catch (error) {
    return res.status(404).json({ message: "users are not there", error });
  }
};
