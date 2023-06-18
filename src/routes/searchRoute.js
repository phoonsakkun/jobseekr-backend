const express = require("express");
const searchjobsController = require("../controllers/searchjobsController");

const router = express.Router();

router.get("/", searchjobsController.getLocation);
router.get("/jobtype", searchjobsController.getJobtype);

module.exports = router;
