module.exports = (sequelize, Datatypes) => {
  const JobPost = sequelize.define(
    "JobPost",
    {
      position: {
        type: Datatypes.STRING,
      },
      jobDescription: {
        type: Datatypes.TEXT,
      },
      salary: {
        type: Datatypes.STRING,
      },
    },
    {
      underscored: true,
    }
  );
  JobPost.associate = (models) => {
    JobPost.belongsTo(models.Employer, {
      foreignKey: {
        name: "employerId",
      },
      onDelete: "RESTRICT",
    });
    JobPost.hasMany(models.ApplyJob, {
      foreignKey: {
        name: "postjobId",
      },
      onDelete: "RESTRICT",
    });
    JobPost.belongsTo(models.Region, {
      foreignKey: {
        name: "regionId",
      },
      onDelete: "RESTRICT",
    });
    JobPost.belongsTo(models.Hiringtype, {
      foreignKey: {
        name: "hiringtypeId",
      },
      onDelete: "RESTRICT",
    });
    JobPost.belongsTo(models.JobType, {
      foreignKey: {
        name: "jobtypeId",
      },
      onDelete: "RESTRICT",
    });
  };

  return JobPost;
};
