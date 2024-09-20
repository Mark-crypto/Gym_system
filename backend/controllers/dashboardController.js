import User from "../model/user";

export const createUser = async (req, res) => {
  const { fname, lname, photo, email, number, packages, password } = req.body;
  try {
    const user = await User.create({
      fname,
      lname,
      photo,
      email,
      number,
      packages,
      password,
    });
    user.save();
    res.send({ message: "Record successfully inserted" });
  } catch (error) {
    res.send({ message: "Internal server error" });
  }
};
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate();
    res.send({ message: "Record successfully inserted" });
  } catch (error) {
    res.send({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete();
    if (deletedUser) return res.send({ message: "User deleted successfully" });
    else return res.status(404).send({ message: "user not found" });
  } catch (error) {
    console.log(error);
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error occurred" });
  }
};
