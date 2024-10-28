import { Router } from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
} from "../controllers/dashboardController";
import { auth } from "../controllers/authController";

const router = Router();

//admin dashboard
router.get("/dashboard", getUsers);
//add new user
router.post("/dashboard", createUser);
//edit
router.put("/dashboard", updateUser);
//delete
router.delete("/dashboard", deleteUser);

export default router;
