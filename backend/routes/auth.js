import { Router } from "express";

import {
  login,
  logout,
  registration,
  generateOTP,
  verifyOTP,
  resetPassword,
  authenticate,
} from "../controllers/authController";
import { sendEmail } from "../controllers/emailController";
import { verifyUser } from "../controllers/authController";
import { localVariables } from "../middlewares/authMiddleware";

const router = Router();

//login
router.post("/login", verifyUser, login);
//logout
router.post("/logout", logout);
//Generate OTP should be automatic
router.get("/generateOTP", verifyUser, localVariables, generateOTP);
//Verify OTP
router.get("/verifyOTP", verifyUser, verifyOTP);
//Forgot Password
router.get("/forgotPassword", forgotPassword);
//Reset Password
router.put("/resetPassword", verifyUser, resetPassword);
//Register mail
router.post("/registerMail", sendEmail);
//Authenticate
router.post("/authenticate", verifyUser, authenticate);
//Registration
router.post("/registration", registration);

export default router;
