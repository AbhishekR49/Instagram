const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");


const authMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "Token not found",
      });
    }

    const decode = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (!decode) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    const user = await UserModel.findById(decode.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;