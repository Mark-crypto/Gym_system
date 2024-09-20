import { Router } from "express";
const router = Router();
import { getReports } from "../controllers/reportsController";

//reports
router.get("/reports", getReports);
