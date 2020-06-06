const passport = require("passport");
const User = require("../models/user");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function (
  email,
  password,
  done
) {
  User.findOne({ email: email }, function (err, user) {
    if (err) return done(err);
    if (!user) return done(null, false);
    user.comparePassword(password, function (err, isMatch) {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: "aksdjh",
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  console.log("called")
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);
    if (!user) {
      done(null, false);
    }
    done(null, user);
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
