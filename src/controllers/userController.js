const { WorkExperience, Education, Resume, Certificate } = require("../models");
const { all } = require("../routes/authRoute");

// add
exports.createJobPosition = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.user);
    const {
      jobPosition,
      companyName,
      startDate,
      endDate,
      achievementsTasks,
      neverWorkBefore,
      addToResume,
    } = req.body;

    const newWorkexp = await WorkExperience.create({
      userId: req.user.id,
      jobPosition,
      companyName,
      startDate,
      endDate,
      achievementsTasks,
      neverWorkBefore,
      addToResume,
    });
    res.status(201).json({ msg: "upload complete", newWorkexp });
  } catch (err) {
    next(err);
  }
};
exports.createEducation = async (req, res, next) => {
  const { faculty, university, startDate, endDate, graduated, isTheHighest } =
    req.body;
  try {
    const newEducation = await Education.create({
      userId: req.user.id,
      faculty,
      university,
      startDate,
      endDate,
      graduated,
      isTheHighest,
    });
    res.status(201).json({ msg: "upload complete", newEducation });
  } catch (err) {
    next(err);
  }
};

exports.createCertificate = async (req, res, next) => {
  const { certificateName, certificateFile } = req.body;
  try {
    const newCertificate = await Certificate.create({
      userId: req.user.id,
      certificateName,
      certificateFile,
    });
    res.status(201).json({ msg: "upload complete", newCertificate });
  } catch (err) {
    next(err);
  }
};
exports.createResume = async (req, res, next) => {
  const { resumeName, resumeFile, addToProfile } = req.body;
  try {
    const newResume = await Resume.create({
      userId: req.user.id,
      resumeFile,
      resumeName,
      addToProfile,
    });
    res.status(201).json({ msg: "upload complete", newResume });
  } catch (err) {
    next(err);
  }
};

// <--------------->

// delete
exports.deleteWorkExp = async (req, res, next) => {
  const { id } = req.params;
  try {
    await WorkExperience.destroy({ where: { id: id } });
    res.status(200).json({ msg: "delete" });
  } catch (err) {
    next(err);
  }
};
exports.deleteEducation = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Education.destroy({ where: { id: id } });
    res.status(200).json({ msg: "delete" });
  } catch (err) {
    next(err);
  }
};
exports.deleteCertificate = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Certificate.destroy({ where: { id: id } });
    res.status(200).json({ msg: "delete" });
  } catch (err) {
    next(err);
  }
};
exports.deleteResume = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Resume.destroy({ where: { id: id } });
    res.status(200).json({ msg: "delete" });
  } catch (err) {
    next(err);
  }
};

// <------------>

// Edit

exports.editWorkExp = async (req, res, next) => {
  const { id } = req.params;
  try {
    const rs = await WorkExperience.update(
      { ...req.body },
      { where: { id: id } }
    );
    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};
exports.editEducation = async (req, res, next) => {
  const { id } = req.params;
  try {
    const rs = await Education.update({ ...req.body }, { where: { id: id } });
    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};
exports.editCertificate = async (req, res, next) => {
  const { id } = req.params;
  try {
    const rs = await Certificate.update({ ...req.body }, { where: { id: id } });
    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};
exports.editResume = async (req, res, next) => {
  const { id } = req.params;
  try {
    const rs = await Resume.update({ ...req.body }, { where: { id: id } });
    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};

// <----------->

// get all

exports.getAllWorkExp = async (req, res, next) => {
  try {
    const AllWorkExp = await WorkExperience.findAll();
    res.status(201).json({ AllWorkExp });
  } catch (err) {
    next(err);
  }
};
exports.getAllEducation = async (req, res, next) => {
  try {
    const AllEducation = await Education.findAll();
    res.status(201).json({ AllEducation });
  } catch (err) {
    next(err);
  }
};
exports.getAllCertificate = async (req, res, next) => {
  try {
    const AllCertificate = await Certificate.findAll();
    res.status(201).json({ AllCertificate });
  } catch (err) {
    next(err);
  }
};
exports.getAllResume = async (req, res, next) => {
  try {
    const AllResume = await Resume.findAll();
    res.status(201).json({ AllResume });
  } catch (err) {
    next(err);
  }
};

// <----------->
exports.getWorkExpById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const rs = await WorkExperience.findOne({
      where: { id: id },
    });
    res.status(888).json(rs);
  } catch (err) {
    next(err);
  }
};
