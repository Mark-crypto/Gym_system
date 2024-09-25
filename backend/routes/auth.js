import { Router } from "express";

import { login, logout, registration } from "../controllers/userController";

const router = Router();

//login
router.post("/login", login);
//logout
router.post("/logout", logout);
//Generate OTP should be automatic
router.get("/generateOTP", generateOTP);
//Verify OTP
router.get("/verifyOTP", verifyOTP);
//Forgot Password
router.get("/forgotPassword", forgotPassword);
//Reset Password
router.get("/resetPassword", resetPassword);
//Register mail
router.post("/registerMail", registerMail);
//Authenticate
router.post("/authenticate", authenticate);
//Registration
router.post("/registration", registration);

export default router;
