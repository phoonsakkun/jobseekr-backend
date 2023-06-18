// exports.getAllJobs = async (req, res, next) => {};

const { JobPost, Employer } = require("../models");

exports.createJob = async (req, res, next) => {
  try {
    const {
      position,
      jobDescription,
      salary,
      regionId,
      jobtypeId,
      hiringtypeId,
      postjobId,
      employerId,
    } = req.body;

    // if (!req.body.postion || !req.body.postion.trim()) {
    //   throw new Error("Job Position is required");
    // }

    // if (!req.body.regionId) {
    //   throw new Error("Location is required");
    // }

    // const value = {
    //   userId: req.user.id,
    // };

    const newJobPost = await JobPost.create({
      position: position,
      jobDescription: jobDescription,
      salary: salary,
      regionId: regionId,
      jobtypeId: jobtypeId,
      hiringtypeId: hiringtypeId,
      postjobId: postjobId,
      employerId: employerId,
    });
    res.status(201).json({ msg: "upload complete", newJobPost });
    // const post = await JobPost.findOne({
    //   where: { id: newJobPost.id },
    //   include: User,
    // });
  } catch (err) {
    next(err);
  }
};

exports.getJob = (req, res, next) => {
  JobPost.findAll({
    include: [
      { model: Employer },
      // { model: JobType },
      // { model: Region },
      // { model: Hiringtype },
    ],
  })
    .then((rs) => {
      res.json(rs);
    })
    .catch((err) => next(err));
};

// exports.getJobById = (req, res, next) => {
//   const { id } = req.param;
//   jobPost.findOne({
//     attributes: [],
//     where: { id: id },
//   });
// };

exports.getCompany = (req, res, next) => {
  Employer.findAll()
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};
