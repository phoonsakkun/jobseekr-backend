module.exports = (sequelize, DataTypes) => {
  const Hiringtype = sequelize.define(
    "Hiringtype",
    {
      hiringTypeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Hiringtype.associate = (models) => {
    Hiringtype.hasMany(models.JobPost, {
      foreignKey: {
        name: "hiringtypeId",
      },
      onDelete: "RESTRICT",
    });
  };

  return Hiringtype;
};
