import Feedback from "../model/feedback";
import User from "../model/user";

export const memberFeedback = async (req, res) => {
  const { name, email, number, message } = req.body;
  try {
    const newFeedback = new Feedback({
      name,
      email,
      number,
      message,
    });
    await newFeedback.save();
    res.send({ message: "Entry inserted successfully" });
  } catch (error) {
    console.log(error);
    res.send({ message: "An error occured. Please try again" });
  }
};

export const profile = async (req, res) => {
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.send({ message: "Internal server error" });
  }
};

export const adminFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};
