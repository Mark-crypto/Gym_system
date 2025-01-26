import mongoose from "mongoose";

const { Schema, model } = mongoose;

const paymentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    packages: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = model("Payment", paymentSchema);
export default Payment;
