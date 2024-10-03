const express = require("express");
const { signUp, logIn } = require("../../Controller/auth.controller");

// const registerController = require('./');

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);

module.exports = router;
