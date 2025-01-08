import { Router } from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getSingleUser,
} from "../controllers/dashboardController.js";
// import { auth } from "../controllers/authController.js";

const router = Router();

//admin dashboard
router.get("/dashboard", getUsers);
//get single user
router.get("/dashboard/:id", getSingleUser);
//add new user
router.post("/dashboard", createUser);
//edit
router.put("/dashboard/:id", updateUser);
//delete
router.delete("/dashboard/:id", deleteUser);

export default router;
