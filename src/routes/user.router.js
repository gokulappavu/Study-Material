const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  getuserById
} = require("../controllers/user.controller");

router
  .route("/user")
  .get(getUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

  router
  .route("/userbyid")
  .get(getuserById);

module.exports = router;
