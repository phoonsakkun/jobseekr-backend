module.exports = (sequelize, DataTypes) => {
  const Resume = sequelize.define(
    "Resume",
    {
      resumeName: {
        type: DataTypes.STRING,
      },
      resumeFile: {
        type: DataTypes.STRING,
      },
      addToProfile: {
        type: DataTypes.TINYINT,
      },
    },
    {
      underscored: true,
    }
  );
  return Resume;
};
