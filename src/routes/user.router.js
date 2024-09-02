const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");

router
  .route("/user")
  .get(getUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
