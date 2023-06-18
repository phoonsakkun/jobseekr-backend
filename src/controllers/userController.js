const { WorkExperience } = require("../models");

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
      jobPosition: jobPosition,
      companyName: companyName,
      startDate: startDate,
      endDate: endDate,
      achievementsTasks: achievementsTasks,
      neverWorkBefore: neverWorkBefore,
      addToResume: addToResume,
    });
    res.status(201).json({ msg: "upload complete", newWorkexp });
  } catch (err) {
    next(err);
  }
};

exports.deleteWorkExp = async (req, res, next) => {
  const { id } = req.params;
  try {
    await WorkExperience.destroy({ where: { id: id } });
    res.status(200).json({ msg: "delete" });
  } catch (err) {
    next(err);
  }
};

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
