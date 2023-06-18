const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/workexp", userController.createJobPosition);
router.delete("/workexp/:id", userController.deleteWorkExp);
router.patch("/work/:id", userController.editWorkExp);
router.get("/workexp/:id", userController.getWorkExpById);

module.exports = router;
