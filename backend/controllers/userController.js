import Feedback from "../model/feedback.js";
import User from "../model/user.js";

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
    res.send({ message: "An error occurred. Please try again" });
  }
};

export const profile = async (req, res) => {
  const { username } = req.params;
  try {
    if (!username) {
      res.send({ message: "Invalid username" });
    }
    const user = await User.findOne({ email: username });
    if (!user)
      return res.status(501).send({ message: "Could not find the user" });
    //remove password and convert to object removing unnecessary mongoose data
    //const newUser = {...user, password:""}
    const { password, ...rest } = Object.assign({}, user.toJSON());
    res.status(201).send(rest);
  } catch (error) {
    res.send({ message: "Internal server error" });
  }
};

export const adminFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    //console.log(feedback);
    res.json(feedback);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};
