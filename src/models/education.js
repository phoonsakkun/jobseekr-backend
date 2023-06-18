// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize()
module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define(
    "Education",
    {
      faculty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      university: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      graduated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isTheHighest: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Education.associate = (models) => {
    Education.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });
  };
  return Education;
};
