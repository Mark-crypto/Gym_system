import mongoose from "mongoose";
//Destructuring schema and model from mongoose
const { Schema, model } = mongoose;
//Schema
const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: String,
  role: String,
  status: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
});
userSchema.pre("save", (next) => {
  this.updatedAt = Date.now();
  next();
});
//model
const User = model("User", userSchema);
//exporting model
export default User;
