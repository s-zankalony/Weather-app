const express = require("express");
const router = express.Router();
const responseOpenWeather = require("../controller/controller");

router.route("/").post(responseOpenWeather);

module.exports = router;
