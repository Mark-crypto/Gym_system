import { Router } from "express";
import authRouter from "./auth.js";
import adminRouter from "./admin.js";
import userRouter from "./user.js";
import emailRouter from "./email.js";
import reportsRouter from "./reports.js";

const router = Router();

router.use(authRouter);
router.use(adminRouter);
router.use(userRouter);
router.use(emailRouter);
router.use(reportsRouter);

export default router;
