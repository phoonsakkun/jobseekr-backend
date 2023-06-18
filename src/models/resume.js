module.exports = (sequelize, DataTypes) => {
  const Resume = sequelize.define(
    "Resume",
    {
      resumeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resumeFile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addToProfile: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Resume.associate = (models) => {
    Resume.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });
  };
  return Resume;
};
