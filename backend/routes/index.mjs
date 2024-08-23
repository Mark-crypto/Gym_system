import { Router } from "express";
import authRouter from "./auth.js";
import adminRouter from "./admin.js";
import userRouter from "./user.js";
import emailRouter from "./email.js";

const router = Router();

router.use(authRouter);
router.use(adminRouter);
router.use(userRouter);
router.use(emailRouter);

export default router;
