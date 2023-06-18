const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(authorization);
  if (!authorization || !authorization.startsWith("Bearer"))
    return res.status(401).json({ msg: "Unauthorized" });
  const token = authorization.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Unauthorized" });
  // console.log(token);
  // console.log(process.env.JWT_SECRET_KEY);
  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  // console.log(payload);
  User.findOne({
    where: { id: payload.id },
  }).then((user) => {
    console.log(user);
    if (!user) return res.status(401).json({ msg: "Unauthorized" });
    req.user = user;
    next();
  });
};
