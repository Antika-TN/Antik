const express = require("express");
const AuthController = require("../controler/authentication");
const router = express.Router();

router.post("/signup", AuthController.createUser);
router.post("/login",AuthController.login);

module.exports = router
