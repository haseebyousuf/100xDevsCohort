const jwt = require('jsonwebtoken');
const jwtPassword = 'Secret123';
const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, Course } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin)
      return res.status(400).json({ message: 'Admin Already existing' });
    const newAdmin = new Admin({ username, password });
    const savedAdmin = await newAdmin.save();
    res.status(200).json({ message: 'Admin created successfully' });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;
    const existingAdmin = await Admin.findOne({ username: username });
    if (!existingAdmin) return res.send(404, { message: 'Admin not found' });
    const token = 'Bearer ' + jwt.sign({ username: username }, jwtPassword);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, description, price, image } = req.body;
    await Course.create({ title, description, price, image });
    res.json({
      message: 'Course added successfully',
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = router;
