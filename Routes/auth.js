const router = require("express").Router();
const {googlelogin} = require("../controller/authController");

router.post("/googlelogin",googlelogin)

module.exports = router;