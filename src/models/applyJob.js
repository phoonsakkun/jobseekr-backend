module.exports = (sequelize, DataTypes) => {
  const ApplyJob = sequelize.define(
    "ApplyJob",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      jobId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      introducingLetter: {
        type: DataTypes.STRING,
      },
      expectSalary: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    }
  );
  ApplyJob.associate = (models) => {
    ApplyJob.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });
    ApplyJob.belongsTo(models.JobPost, {
      foreignKey: {
        name: "postjobId",
      },
      onDelete: "RESTRICT",
    });
  };

  return ApplyJob;
};
