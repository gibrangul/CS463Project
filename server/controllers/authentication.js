const User = require("../models/user");
const jwt = require("jwt-simple");
const secret = "aksdjh";

const genToken = (user) => {
  const time = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: time,
    },
    secret
  );
};

const signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(422).send({
      error: "Incomplete Details",
    });
  }

  User.findOne(
    {
      email,
    },
    (err, extUser) => {
      if (err) return next(err);

      if (extUser) {
        res.status(422).send({ error: "Email in Use" });
      }
    }
  );

  const user = new User({
    email,
    password,
  });

  user.save(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ token: genToken(user) });
  });
};

const signIn = (req, res, next) => {
  res.send({
    token: genToken(req.user),
    user: { uid: req.user._id, username: req.user.username },
  });
};

module.exports = {
  signup,
  signIn,
};
