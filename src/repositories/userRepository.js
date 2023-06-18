const { User } = require("../models");

exports.getUserByEmail = (email) =>
  User.findOne({
    where: {
      email: email,
    },
  });
