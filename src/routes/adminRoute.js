const express = require("express");
const authController = require("../controllers/authController");
const adminAuthenticate = require("../middlewares/adminAuthenticate");

const router = express.Router();

router.post("/login", authController.adminLogin);
router.post("/register", authController.adminRegister);
router.get("/getadmin", adminAuthenticate, authController.getAdmin);

module.exports = router;
