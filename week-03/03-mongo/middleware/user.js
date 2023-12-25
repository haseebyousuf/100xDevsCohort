const { User } = require('../db');

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username } = req.headers;
  if (!username) return res.status(404).json({ message: 'Invalid username' });
  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ message: 'Invalid user' });
  next();
}

module.exports = userMiddleware;
