const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/account.controller");
const { verifyToken } = require("../middleware/authToken");
const upload=require("../middleware/multer")

router.use(verifyToken);

router
.route("/file")
.put(upload, AccountController.updateFile);

router
.route("/all")
.put(AccountController.updateManyAccount)
.delete(AccountController.deleteManyAccount)
.post(upload,AccountController.fileUpload)
.get(AccountController.getUpload)

router
.route("/")
.post(AccountController.createAccount)
.get(AccountController.getUserAccount)
.put(AccountController.updateAccount)
.delete(AccountController.deleteAccount)





module.exports = router;