module.exports = (sequelize, DataTypes) => {
  const Advertising = sequelize.define(
    "Advertising",
    {
      advertisingName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      advertisingImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Advertising.associate = (models) => {
    Advertising.belongsTo(models.Employer, {
      foreignKey: {
        name: "employerId",
      },
    });
  };
  return Advertising;
};
