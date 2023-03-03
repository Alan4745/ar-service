const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const verifyToken = (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    console.log("Could not get verify jwt token");
    return res.status(401).send({ message: "Not autheticated" });
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "Usertoken");
  } catch (error) {
    return res.status(500).send({ message: `Error decoding token ${error}` });
  }

  return decodedToken.userId;
};

exports.verifyUser = async (req, res, next) => {
  const userId = verifyToken(req, res);

  const user = await User.findById(userId);

  if (!user) {
    return res.status(500).send({ message: "Internal server error" });
  }
  req.loggedInUserId = userId;
  next();
};
