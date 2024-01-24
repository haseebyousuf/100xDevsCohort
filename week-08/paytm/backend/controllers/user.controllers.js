import { User } from '../db.js';
import {
  signUpSchema,
  signinSchema,
  updateUserSchema,
} from '../utils/zodSchemas.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  try {
    const { username, firstName, lastName, password } = req.body;
    const { success } = signUpSchema.safeParse(req.body);
    if (!success) {
      return res.status(411).json({ message: 'Invalid Inputs' });
    }
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(411).json({ message: 'Email already taken' });
    }
    const user = new User({
      username,
      firstName,
      lastName,
    });
    const hashedPassword = await user.createHash(password);
    user.password = hashedPassword;
    await user.save();

    const userId = user._id;
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    res.status(200).json({ message: 'User created Successfully', token });
  } catch (error) {
    return res.status(401).json({ message: 'Server Error' });
  }
};

export const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { success } = signinSchema.safeParse({ username, password });
    if (!success) {
      return res.status(411).json({ message: 'Invalid Inputs' });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Invalid Credentials' });
    }
    if (await user.validatePassword(password)) {
      const userId = user._id;
      const token = jwt.sign({ userId }, process.env.JWT_SECRET);
      res.status(200).json({ token });
    } else {
      return res.status(404).json({ message: 'Invalid Credentials' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Server Error' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, password } = req.body;
    const { success } = updateUserSchema.safeParse({
      firstName,
      lastName,
      password,
    });
    if (!success) {
      return res.status(411).json({ message: 'Invalid Inputs' });
    }
    const updateFields = { firstName, lastName };
    if (password) {
      console.log('password');
      const user = await User.findOne({ _id: req.userId });
      const hashedPassword = await user.createHash(password);
      updateFields.password = hashedPassword;
    }
    await User.findOneAndUpdate({ _id: req.userId }, updateFields);
    res.status(200).json({ message: 'User updated Successfully' });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Server Errorrrrr' });
  }
};

// export const updateUser = async (req, res) => {
//   try {
//   } catch (error) {
//     return res.status(401).json({ message: 'Server Error' });
//   }
// };
