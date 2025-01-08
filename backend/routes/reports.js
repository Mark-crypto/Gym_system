import { Router } from "express";
const router = Router();
import { getReports } from "../controllers/reportsController.js";

//reports
router.get("/reports", getReports);
export default router;
