const mongoose = require("mongoose");
const { v4 } = require("uuid");

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    userName: String,
    email: {
      type: String,
      unique: true,
    },
    mobileNumber: Number,
    address: String,
  },
  { timestamps: true }
);

const user = mongoose.model("users", userSchema);

module.exports = user;
