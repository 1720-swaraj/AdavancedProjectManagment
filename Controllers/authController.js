import bcrypt from "bcryptjs";
import { usersSchema } from "../Models/usersSchema.js";
import jwt from "jsonwebtoken";

export const userRegistration = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password,3);
    console.log(name, hashedPassword, email, role);
    const newUser = await usersSchema.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.status(200).json({ message: "web token generated", token });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
