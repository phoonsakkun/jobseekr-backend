const { Employer } = require("../models");

exports.getAdminByEmail = (email) =>
  Employer.findOne({
    where: {
      email: email,
    },
  });
