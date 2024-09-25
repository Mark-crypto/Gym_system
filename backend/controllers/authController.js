import bcrypt from "bcryptjs";
import User from "../model/user.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//Middleware for verifying user
export const verifyUser = async (req, res, next) => {
  const { verificationToken } = req.params;
  if (!verificationToken) {
    return res.status(400).json({ message: "Invalid token" });
  }
  const user = await User.findOne({
    verificationToken,
    verificationTokenExpiresAt: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).json({ message: "Invalid token" });
  }
  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpiresAt = undefined;
  await user.save();
  res.status(200).json({ message: "User verified successfully" });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  //check if user exist
  //check if password is correct
  //generate token
  let user;
  const token = await jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  //set cookie
  res.send({ message: "Login successful" });
};

export const logout = (req, res) => {
  res.send("Logout successful");
};

export const registration = async (req, res) => {
  const { fname, lname, email, number, photo, password, packages } = req.body;
  try {
    if (!fname || !lname || !email || !number || !password || !packages) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationToken();
    const newUser = new User({
      first_name: fname,
      last_name: lname,
      email,
      password: hashedPassword,
      profilePhoto: photo,
      packages,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 6 * 60 * 60 * 1000, //6 days
    });
    await newUser.save();
    //JWT
    generateTokenAndSetCookie(res, newUser._id);
    res.status(201).json({
      success: true,
      message: "user created successfully",
      newUser: {
        ...newUser._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
