import { Router } from "express";
import bcrypt from "bcryptjs";

const router = Router();

//login
router.get("/login", (req, res) => {
  res.send({ email: "test@test.com", password: "12345678" });
});
router.post("/login", (req, res) => {
  const testData = {
    email: "test@test.com",
    password: "12345678",
  };
  console.log(req.body);
  const { email, password } = req.body;
  if (email == testData.email) {
    const allowed = bcrypt.compareSync(testData.password, password);
    if (allowed) {
      return res.send({ message: "Successful login" });
    } else {
      return res.send({ message: "Enter correct password" });
    }
  } else {
    return res.send({ message: "Enter correct email/username" });
  }
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
