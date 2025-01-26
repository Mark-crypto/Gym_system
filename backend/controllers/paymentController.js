import Payment from "../model/payment.js";

export const makePayment = async (req, res) => {
  const { name, email, number, amount, packages, period } = req.body;
  try {
    const newPayment = new Payment({
      name,
      email,
      number,
      amount,
      packages,
      period,
    });
    await newPayment.save();
    res.status(200).send({ message: "You will receive a prompt soon" });
  } catch (error) {
    res.status(500).send({ message: "An error occurred. Please try again" });
  }
};
