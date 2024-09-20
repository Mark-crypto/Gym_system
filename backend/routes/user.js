import { Router } from "express";
import {
  memberFeedback,
  profile,
  adminFeedback,
} from "../controllers/userController";

const router = Router();

//User management
//User profile
router.get("/profile", profile);
//Admin Feedback
router.get("/feedback", adminFeedback);
//User feedback
router.post("/feedback", memberFeedback);
export default router;
