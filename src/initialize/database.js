// const { sequelize } = require("../models");
const { WorkExperience } = require("../models");

WorkExperience.sync({ force: true });
