module.exports = (sequelize, DataTypes) => {
  const Employer = sequelize.define(
    "Employer",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyDescription: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      profileImage: {
        type: DataTypes.STRING,
      },
      coverImage: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    }
  );

  Employer.associate = (models) => {
    Employer.hasMany(models.JobPost, {
      foreignKey: {
        name: "employerId",
      },
      onDelete: "RESTRICT",
    });
    Employer.hasMany(models.Advertising, {
      foreignKey: {
        name: "employerId",
      },
      onDelete: "RESTRICT",
    });
  };
  return Employer;
};
