const { Region, Province, JobType } = require("../models");

exports.getLocation = (req, res, next) => {
  Region.findAll()
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

exports.getJobtype = (req, res, next) => {
  JobType.findAll()
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};
