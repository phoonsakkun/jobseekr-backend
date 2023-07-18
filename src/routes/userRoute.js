const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//Add
router.post("/workexp", userController.createJobPosition);
router.post("/education", userController.createEducation);
router.post("/certificate", userController.createCertificate);
router.post("/resume", userController.createResume);

//Edit
router.patch("/education/:id", userController.editEducation);
router.patch("/work/:id", userController.editWorkExp);
router.patch("/certificate/:id", userController.editCertificate);
router.patch("/resume/:id", userController.editResume);

router.get("/workexp/:id", userController.getWorkExpById);

//Delete
router.delete("/workexp/:id", userController.deleteWorkExp);
router.delete("/education/:id", userController.deleteEducation);
router.delete("/certificate/:id", userController.deleteCertificate);
router.delete("/resume/:id", userController.deleteResume);

//Get All
router.get("/workexp", userController.getAllWorkExp);
router.get("/education", userController.getAllEducation);
router.get("/certificate", userController.getAllCertificate);
router.get("/resume", userController.getAllResume);

module.exports = router;
