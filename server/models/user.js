const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const moment = require("moment");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    default: moment().unix(),
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  console.log("casladjk");

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  console.log(candidatePassword);
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

const User = mongoose.model("Users", userSchema);

module.exports = User;
