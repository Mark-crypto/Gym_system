import Feedback from "../model/feedback";
import User from "../model/user";

export const memberFeedback = (req, res) => {
  res.send("User feedback");
};

export const profile = (req, res) => {
  res.send("User profile");
};

export const adminFeedback = (req, res) => {
  res.send("Sent successful");
};
