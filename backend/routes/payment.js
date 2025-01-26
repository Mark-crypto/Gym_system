import Router from "express";
import { makePayment } from "../controllers/paymentController.js";

const router = Router();

router.post("/payment", makePayment);

export default router;
