const userModel = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    await userModel.create(req.body);

    res.json({
      message: "User created successfully.",
    });
  } catch (error) {
    res.json({
      Error: error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const findAns = await userModel.find();
    if (!findAns) return res.status(404).json({ Message: "Data not found" });

    res.json({ data: findAns });
  } catch (error) {
    res.json({ error });
  }
};

const getuserById = async (req, res) => {
  try {
    const { _id } = req.query;

    const findAns = await userModel.findById(_id);
    if (!findAns) return res.status(404).json({ Message: "Data not found" });

    res.json({ data: findAns });
  } catch (error) {
    res.json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.query;
    const update = await userModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!update) return res.status(404).json({ Message: "Data Not Found" });

    res.json({ data: update, message: "User updated successfully." });
  } catch (error) {
    res.json({ error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { _id } = req.query;
    const update = await userModel.findByIdAndDelete(_id);
    if (!update) return res.status(404).json({ Message: "Data Not Found" });

    res.json({ message: "User deleted successfully." });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getuserById,
};
