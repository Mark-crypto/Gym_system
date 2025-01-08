import { Router } from "express";
import {
  memberFeedback,
  profile,
  adminFeedback,
} from "../controllers/userController.js";

const router = Router();

//User management
//User profile
router.get("/profile/:username", profile);
//Admin Feedback
router.get("/admin-feedback", adminFeedback);
//User feedback
router.post("/feedback", memberFeedback);
export default router;
