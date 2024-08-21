import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
//email confirmation
//login
app.get("/login", (req, res) => {
  res.send("General login");
});
app.post("/login", (req, res) => {
  res.send("Login successful");
});
//logout
app.get("/logout", (req, res) => {
  res.send("Logout successful");
});
//Registration
app.get("/registration", (req, res) => {
  res.send("Register new user");
});
app.post("/registration", (req, res) => {
  res.send("Registration successful");
});
//Admin management
//admin dashboard
app.get("/dashboard", (req, res) => {
  res.send("Admin dashboard");
});
//add new user
app.post("/dashboard", (req, res) => {
  res.send("added successfully");
});
//edit
app.put("/dashboard", (req, res) => {
  res.send("Record updated successfully");
});
//delete
app.delete("/dashboard", (req, res) => {
  res.send("Record deleted successfully");
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
app.post("/feedback", (req, res) => {
  res.send("Sent successful");
});
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
