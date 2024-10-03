const express = require("express");
const { create } = require("../../Controller/subscription.controller");
const router = express.Router();

router.post("/create", create);
module.exports = router;
