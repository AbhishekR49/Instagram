const jwt = require('jsonwebtoken');

 let generateToken = (user_id, secret, time) => {
  return jwt.sign({ id: user_id }, secret, {
    expiresIn: time,
  });
};

module.exports = generateToken;