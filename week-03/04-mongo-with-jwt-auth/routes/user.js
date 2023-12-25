const jwt = require('jsonwebtoken');
const jwtPassword = 'Secret123';
const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');
const { User, Course } = require('../db');

// User Routes
router.post('/signup', async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: 'User Already existing' });
    const newUser = new User({ username, password });
    const savedUser = await newUser.save();
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (!existingUser) return res.send(404, { message: 'user not found' });
    const token = 'Bearer ' + jwt.sign({ username: username }, jwtPassword);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    if (!courses) return res.status(404).json({ message: 'No Courses found' });
    res.status(200).json({ courses });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const { courseId } = req.params;
    const { username } = req.headers;
    const user = await User.findOne({ username });
    if (!user) return res.status(403).json({ message: 'User not found' });
    const course = await Course.findOne({ _id: courseId });
    user.courses.push(course);
    user.save();
    res.status(200).json({ message: 'Course Purchased successfully' });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const { username } = req.headers;
    const user = await User.findOne({ username });
    if (!user) return res.status(403).json({ message: 'User not found' });
    res.status(200).json({ purchasedCourses: user.courses });
  } catch (error) {
    console.log(error);
    throw error;
  }
});
module.exports = router;
