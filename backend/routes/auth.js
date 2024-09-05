import { Router } from "express";

import { login, logout, registration } from "../controllers/userController";

const router = Router();

//login
router.post("/login", login);
//logout
router.get("/logout", logout);
//Registration
router.post("/registration", registration);

export default router;
