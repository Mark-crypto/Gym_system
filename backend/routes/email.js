import { Router } from "express";
import { sendEmail } from "../controllers/emailController.js";

const router = Router();

//Send email
router.get("/send-email", sendEmail);

export default router;
