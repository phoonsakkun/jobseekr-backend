module.exports = (sequelize, Datatypes) => {
  const Certificate = sequelize.define(
    "Certificate",
    {
      certificateName: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      certificateFile: {
        type: Datatypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Certificate.associate = (models) => {
    Certificate.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
      },
      onDelete: "RESTRICT",
    });
  };
  return Certificate;
};
