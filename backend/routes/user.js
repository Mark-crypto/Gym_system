import { Router } from "express";

const router = Router();

//User management
//User profile
router.get("/profile", (req, res) => {
  res.send("User profile");
});
//Feedback
router.get("/feedback", (req, res) => {
  res.send("User feedback");
});
router.post("/feedback", (req, res) => {
  res.send("Sent successful");
});
export default router;
