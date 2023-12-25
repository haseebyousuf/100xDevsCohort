const { Admin } = require('../db');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username } = req.headers;
  if (!username)
    return res.status(404).json({ message: 'no username provided' });

  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(404).json({ message: 'Invalid Admin' });
  next();
}

module.exports = adminMiddleware;
