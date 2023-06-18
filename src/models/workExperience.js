module.exports = (sequelize, DataTypes) => {
  const WorkExperience = sequelize.define(
    "WorkExperience",
    {
      jobPosition: {
        type: DataTypes.STRING,
      },
      companyName: {
        type: DataTypes.STRING,
      },
      startDate: {
        type: DataTypes.DATEONLY,
      },
      endDate: {
        type: DataTypes.DATEONLY,
      },
      achievementsTasks: {
        type: DataTypes.TEXT,
      },
      neverWorkBefore: {
        type: DataTypes.BOOLEAN,
      },
      addToResume: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      underscored: true,
    }
  );

  WorkExperience.associate = (models) => {
    WorkExperience.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });
  };

  return WorkExperience;
};
