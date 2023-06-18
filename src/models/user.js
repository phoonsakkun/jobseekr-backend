module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
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
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          is: /^[0-9]{10}$/,
        },
      },
      skill: {
        type: DataTypes.TEXT,
      },
      language: {
        type: DataTypes.STRING,
      },
      profileImage: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.WorkExperience, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });

    User.hasMany(models.Education, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });

    User.hasMany(models.Resume, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });

    User.hasMany(models.Certificate, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });
    User.hasMany(models.ApplyJob, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });
  };

  return User;
};
