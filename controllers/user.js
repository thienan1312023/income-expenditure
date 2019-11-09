
import User from './models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
require('dotenv').config();

const user_signup = function (req, res, next) {
  var userNew = new User({
    userName: req.body.userName,
    password: req.body.password
  });
  var salt = bcrypt.genSaltSync(10);
  bcrypt.hash(userNew.password, salt, function (err, hash) {
    if (err) return next(err);
    userNew.password = hash;
    userNew
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "User created"
        });
      })
      .catch(err => {
        if (err.code === 11000) {
          res.status(409);
        } else {
          res.status(500);
        }
        next(err);
      });
  });
};



const user_login = async function (req, res) {
  let user;
  try {
    user = await User.findOne({ userName: req.body.userName });
    if (user) {
      let comparePassword = await bcrypt.compare(req.body.password, user.password);
      if (comparePassword) {
        const token = await jwt.sign(
          {
            userId: user._id,
            userName: user.userName
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "30d"
          }
        );
        return res.status(200).json({
          message: "Auth successful",
          token: token
        });
      } else {
        res.status(401).json({
          message: "Login Failed"
        });
      }
    } else {
      res.status(401).json({
        message: "Login Failed"
      });
    }
  } catch (err) {
    res.status(401).json({
      message: "Login Failed"
    });
  }
};

export default {
  user_signup,
  user_login
}
