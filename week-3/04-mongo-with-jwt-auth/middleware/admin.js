// Middleware for handling auth
const jwt = require('jsonwebtoken');
const jwtPassword = 'Secret123';

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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

module.exports = adminMiddleware;
