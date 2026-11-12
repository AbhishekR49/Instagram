const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
    },
    userName: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },

    mobile: {
      type: String,
      minlength: 10,
      maxlength: 10,
    },
    password: {
      type: String,
      required: [true, "Name is required"],
      minlength: 8,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    rePost: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || !this.password) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.comparePass = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const UserModel = mongoose.model("user", userSchema);


module.exports = UserModel;