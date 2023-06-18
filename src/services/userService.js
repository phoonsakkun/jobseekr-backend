const { User, WorkExperience } = require("../models");
const userRepository = require("../repositories/userRepository");

exports.checkEmailExist = async (email) => {
  const existUser = await userRepository.getUserByEmail(email);
  return !!existUser;
};

exports.getUserByEmailAddress = async (email) => {
  const user = await userRepository.getUserByEmail(email);
  return user;
};

exports.createUser = (user) => User.create(user);

exports.getWorkExpByID = (id) =>
  WorkExperience.findAll({
    where: { userId: id },
  });
