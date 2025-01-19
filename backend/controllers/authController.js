import bcrypt from "bcryptjs";
import User from "../model/user.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import dotenv from "dotenv";
dotenv.config();

//Middleware for verifying user
// export const verifyUser = async (req, res, next) => {
//   const { verificationToken } = req.params;
//   if (!verificationToken) {
//     return res.status(400).json({ message: "Invalid token" });
//   }
//   const user = await User.findOne({
//     verificationToken,
//     verificationTokenExpiresAt: { $gt: Date.now() },
//   });
//   if (!user) {
//     return res.status(400).json({ message: "Invalid token" });
//   }
//   user.isVerified = true;
//   user.verificationToken = undefined;
//   user.verificationTokenExpiresAt = undefined;
//   await user.save();
//   res.status(200).json({ message: "User verified successfully" });
// };

//authenticate
export const authenticate = (req, res) => {
  res.end();
};
export const generateOTP = async (req, res) => {
  req.app.locals.OTP = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  res.status(201).send({ code: req.app.locals.OTP });
};
export const verifyOTP = (req, res, next) => {
  const { code } = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(200).send({ message: "Verified successfully" });
  }
  return res.status(400).send({ error: "Invalid OTP" });
};
//successfully redirect user when OTP is valid
export const createResetSession = (req, res) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false; //allow access to route once
    return res.status(201).send({ message: "Access granted" });
  }
  return res.status(440).send({ error: "Session expired" });
};
//reset or update user password
export const resetPassword = async (req, res) => {
  try {
    if (req.app.locals.resetSession)
      return res.status(440).send({ error: "Session expired" });
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(500).send({ message: "user not found" });
      const hashedPassword = await bcrypt.hash(password, 10);
      if (!hashedPassword)
        return res
          .status(500)
          .send({ message: "Password could not be hashed" });
      const updatedPassword = await User.updateOne(
        { email: user.email },
        { password: hashedPassword }
      );
      if (updatedPassword)
        return res
          .status(201)
          .send({ message: "Password updated successfully" });
      req.app.locals.resetSession = false;
    } catch (error) {
      return res.status(500).send({ error });
    }
  } catch (error) {
    return res.status(401).send({ error });
  }
};
export const auth = async (req, res, next) => {
  try {
    //access authorize header to validate request
    const token = req.headers.authorization.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user(decoded);
    next();
    // res.json(decoded);
  } catch (error) {
    return res.status(401).send({ error: "Authentication failed" });
  }
};

export const verifyUser = async (req, res, next) => {
  try {
    const { email } = req.method === "GET" ? req.query : req.body;
    let exist = await User.findOne({ email });
    if (!exist) {
      return res.status(404).send({ errorMessage: "User not found" });
    }
    next();
  } catch (error) {
    return res.status(404).send({ errorMessage: "Authentication Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  //check if user exist
  const userExist = await User.findOne({ email });
  if (!userExist) {
    return res.status(400).json({ message: "Invalid email" });
  }
  //check if password is correct
  const isPasswordCorrect = await bcrypt.compare(password, userExist.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid password" });
  }
  //generate token
  const token = await jwt.sign(
    {
      userId: userExist._id,
      email: userExist.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  if (token) {
    return res.status(200).send({
      message: "Login successful",
      token: token,
      userName: userExist.fname,
    });
  }
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
      fname,
      lname,
      email,
      number,
      password: hashedPassword,
      photo,
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
