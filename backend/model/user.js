import mongoose from "mongoose";
//Destructuring schema and model from mongoose
const { Schema, model } = mongoose;
//Schema
const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//model
const User = model("User", userSchema);
//exporting model
export default User;
