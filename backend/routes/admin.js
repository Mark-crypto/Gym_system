import { Router } from "express";
import cookieParser from "cookie-parser";

const router = Router();

//admin dashboard
router.get("/dashboard", cookieParser(), (req, res) => {
  console.log(req.cookies.user);
  res.send("Admin dashboard");
});
//add new user
router.post("/dashboard", (req, res) => {
  res.send("added successfully");
});
//edit
router.put("/dashboard", (req, res) => {
  res.send("Record updated successfully");
});
//delete
router.delete("/dashboard", (req, res) => {
  res.send("Record deleted successfully");
});
//reports
router.get("/reports", (req, res) => {
  res.send("System reports");
});
//Send email
router.get("/send-email", (req, res) => {
  res.send("Send automated email");
});
export default router;
