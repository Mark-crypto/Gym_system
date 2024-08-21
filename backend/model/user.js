import mongoose from "mongoose";
//Destructuring schema and model from mongoose
const { Schema, model } = mongoose;
//Schema
const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  role: String,
  status: String,
  createdAt: Date,
  updatedAt: Date,
});
//model
const User = model("User", userSchema);
//exporting model
export default User;
