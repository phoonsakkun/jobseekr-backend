module.exports = (sequelize, DataTypes) => {
  const JobType = sequelize.define(
    "JobType",
    {
      jobTypeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  JobType.associate = (models) => {
    JobType.hasMany(models.JobPost, {
      foreignKey: {
        name: "jobtypeId",
      },
      onDelete: "RESTRICT",
    });
  };

  return JobType;
};
