const {
  validateLogin,
  validateRegister,
  validateAdminRegister,
} = require("../validators/authValidator");
const userService = require("../services/userService");
const adminService = require("../services/adminService");
const bcryptService = require("../services/bcryptService");
const tokenService = require("../services/tokenService");
const createError = require("../utils/createError");

exports.register = async (req, res, next) => {
  try {
    const value = validateRegister(req.body);
    const isUserExist = await userService.checkEmailExist(value.email);
    if (isUserExist) {
      createError("email address already in use", 400);
    }

    value.password = await bcryptService.hash(value.password);
    const user = await userService.createUser(value);
    console.log(user);

    // create token
    const accessToken = tokenService.sign({ id: user.id });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};
exports.login = async (req, res, next) => {
  try {
    const value = validateLogin(req.body);
    const user = await userService.getUserByEmailAddress(value.email);
    if (!user) {
      createError("invalid credential", 400);
    }
    const isCorrect = await bcryptService.compare(
      value.password,
      user.password
    );

    if (!isCorrect) {
      createError("invalid credential", 400);
    }
    const accessToken = tokenService.sign({ id: user.id });
    res.status(200).json({ accessToken, isAdmin: false });
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  const WorkExperience = await userService.getWorkExpByID(req.user.id);

  res.status(200).json({ user: req.user, WorkExperience: WorkExperience });
  console.log("##", req.user);
  console.log("###", res);
};

exports.adminLogin = async (req, res, next) => {
  try {
    const value = validateLogin(req.body);
    const admin = await adminService.getAdminByEmailAddress(value.email);
    if (!admin) {
      createError("invalid credential", 400);
    }
    const isCorrect = await bcryptService.compare(
      value.password,
      admin.password
    );

    if (!isCorrect) {
      createError("invalid credential", 400);
    }
    const accessToken = tokenService.sign({ id: admin.id });
    res.status(200).json({ accessToken, isAdmin: true });
  } catch (err) {
    next(err);
  }
};

exports.adminRegister = async (req, res, next) => {
  try {
    const value = validateAdminRegister(req.body);
    const isAdminExist = await adminService.checkEmailExist(value.email);
    if (isAdminExist) {
      createError("email address already in use", 400);
    }

    value.password = await bcryptService.hash(value.password);
    const admin = await adminService.createAdmin(value);
    console.log(admin);

    // create token
    const accessToken = tokenService.sign({ id: admin.id });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

exports.getAdmin = async (req, res, next) => {
  // const user = await adminService.getAdminById(req.user.id);
  res.status(200).json({ admin: req.admin });
  console.log("##", req.admin);
  console.log("###", res);
};
