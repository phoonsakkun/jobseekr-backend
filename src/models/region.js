module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
    {
      regionName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Region.associate = (models) => {
    Region.hasMany(models.Province, {
      foreignKey: {
        name: "regionId",
      },
      // onDelete: "RESTRICT",
    });
    Region.hasMany(models.JobPost, {
      foreignKey: {
        name: "regionId",
      },
      // onDelete: "RESTRICT",
    });
  };
  return Region;
};
