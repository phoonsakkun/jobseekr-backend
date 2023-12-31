const express = require("express");
const jobsController = require("../controllers/jobsController");

const router = express.Router();

router.post("/createjob", jobsController.createJob);
router.get("/all", jobsController.getJob);
router.get("/", jobsController.getSearchJob);
router.get("/company", jobsController.getCompany);
// router.get("/:id", jobController.getJobById);

// router.patch("/:id", jobController);
// router.delete("/:id", jobController);

router.get("/alljobs");
// router.get("/newJobs");
// router.post("/:jobpostId/saved");
module.exports = router;

// axios.get("/jobs");
// axios.get("/jobs?location=5");
// axios.get("/jobs?location=5&jobType=10");
