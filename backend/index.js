import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//email confirmation
//login
app.get("/login", (req, res) => {
  res.send("General login");
});
//Admin management
//admin dashboard
app.get("/dashboard", (req, res) => {
  res.send("Admin dashboard");
});
//reports
app.get("/reports", (req, res) => {
  res.send("System reports");
});
//Send email
app.get("/send-email", (req, res) => {
  res.send("Send automated email");
});
//User management
//User profile
app.get("/profile", (req, res) => {
  res.send("User profile");
});
//Feedback
app.get("/feedback", (req, res) => {
  res.send("User feedback");
});
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
