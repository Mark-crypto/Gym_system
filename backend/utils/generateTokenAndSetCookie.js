import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, //prevent XSS attack
    secure: process.env.NODE_ENV === "production", //for https
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60,
  });
  return token;
};
