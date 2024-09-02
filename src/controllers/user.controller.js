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
    const userId = req.userId;

    const findAns = await userModel.findOne({ userId });
    if (!findAns) return res.status(404).json({ Message: "Data not found" });

    res.json({ findAns });
  } catch (error) {
    res.json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { objectId } = req.query;
    const update = await userModel.findByIdAndUpdate(objectId, req.body, {
      new: true,
    });
    if (!update) return res.status(404).json({ Message: "Data Not Found" });

    res.json({ update });
  } catch (error) {
    res.json({ error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { objectId } = req.query;
    const update = await userModel.findByIdAndDelete(objectId);
    if (!update) return res.status(404).json({ Message: "Data Not Found" });

    res.json({ update });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
