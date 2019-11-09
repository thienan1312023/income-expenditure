import jwt from 'jsonwebtoken';
var jwtDecode = require('jwt-decode');
require('dotenv').config();

module.exports = function (req, res, next) {
  var token = req.headers.authorization;
  var decodedValue = jwtDecode(token);
  if (decodedValue.userId) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        const error = new Error('Failed to authenticate');
        error.status = 401;
        next(error);
      } else {
        req.currentUserId = decodedValue.userId;
        req.userName = decodedValue.userName;
        return next();
      }
    });
  } else {
    req.user = undefined;
    const error = new Error('Failed to authenticate');
    error.status = 401;
    next(error);
  }
};
