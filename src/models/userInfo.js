module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define(
    "UserInfo",
    {
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
        type: DataTypes.TEXT,
      },
      profileImage: {
        type: DataTypes.TEXT,
      },
    },
    {
      underscored: true,
    }
  );
  return UserInfo;
};
