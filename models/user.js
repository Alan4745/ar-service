const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  package: {
    type: String,
    enum: ["personal", "professional", "partner"],
    required: true,
  },
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  credits: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
