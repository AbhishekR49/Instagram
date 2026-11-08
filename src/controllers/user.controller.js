const UserModel = require('../models/user.model');

const getUserProfileController = async (req ,res)=>{
    try {
    let user = UserModel.findById(req.user._id).select(
      "-password -refreshToken",
    );

    return res.status(200).json({
      success: true,
      message: "User profile fetched",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}


module.exports = { getUserProfileController}