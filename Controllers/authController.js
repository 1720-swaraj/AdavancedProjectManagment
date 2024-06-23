import bcrypt from "bcryptjs";
import { usersSchema } from "../Models/usersSchema.js";
import jwt from "jsonwebtoken";

//---------------->> Registeration

export const userRegistration = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 3);
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
    return res
      .status(200)
      .json({ message: "web token generated", token, users: newUser });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

//---------------------------->> LOGIN

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usersSchema.findOne(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.SECRET_KEY
      );
      return res.status(200).json({ message: "Login successfully!!", token });
    } else {
      return res.status(404).json({ message: "Invalid credentials!!" });
    }
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
