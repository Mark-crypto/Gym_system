import { Router } from "express";

const router = Router();

//login

router.post("/login", (req, res) => {
  res.send("Login successful");
});
//logout
router.get("/logout", (req, res) => {
  res.send("Logout successful");
});
//Registration
router.get("/registration", (req, res) => {
  res.send("Register new user");
});
router.post("/registration", (req, res) => {
  console.log(req.body);
  res.send("Registration successful");
});

export default router;
