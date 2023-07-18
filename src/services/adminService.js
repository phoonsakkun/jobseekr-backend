const { Employer } = require("../models");
const adminRepository = require("../repositories/adminRepository");

exports.checkEmailExist = async (email) => {
  const existAdmin = await adminRepository.getAdminByEmail(email);
  return !!existAdmin;
};

exports.getAdminByEmailAddress = async (email) => {
  const Admin = await adminRepository.getAdminByEmail(email);
  return Admin;
};

exports.createAdmin = (admin) => Employer.create(admin);

exports.getAdminById = (id) =>
  Employer.findOne({
    where: { id: id },
  });
