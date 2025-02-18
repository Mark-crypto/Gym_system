import User from "../model/user.js";

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
  const { id } = req.params;
  try {
    // const { userId } = req.user;
    //const id = req.query.id;
    if (id) {
      const body = req.body;
      const user = await User.updateOne({ _id: id }, body);
      if (user)
        return res.status(201).send({ message: "Record updated successfully" });
    } else {
      return res.status(401).send({ error: "User not found" });
    }
  } catch (error) {
    res.send({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete({ _id: id });
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
export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error occurred" });
  }
};
