const jwt = require('jsonwebtoken');
const jwtPassword = 'Secret123';
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  let token = req.headers.authorization;
  if (!token) return res.status(404).json({ message: 'Token not found!' });
  try {
    token = token.replace('Bearer ', '');
    jwt.verify(token, jwtPassword);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
}

module.exports = userMiddleware;
