import bcrypt from "bcryptjs";
import User from "../model/user.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";

export const login = (req, res) => {
  const { username, password } = req.body;
  res.send({ message: "Login successful" });
};

export const logout = (req, res) => {
  res.send("Logout successful");
};

export const registration = async (req, res) => {
  const { fname, lname, email, number, photo, password } = req.body;
  try {
    if (!fname || !lname || !email || !number || !password) {
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
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 6 * 60 * 60 * 1000,
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
  } catch (error) {}
};
