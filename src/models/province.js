module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define(
    "Province",
    {
      provinceName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Province.associate = (models) => {
    Province.belongsTo(models.Region, {
      foreignKey: {
        name: "regionId",
      },
      // onDelete: "RESTRICT",
    });
  };
  return Province;
};
