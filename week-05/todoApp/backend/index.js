import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Task from './models/tasks.js';
import { createTodoSchema, updateTodoSchema } from './schemaTypes.js';

const PORT = 5001;
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.post('/task', async (req, res) => {
  try {
    const { taskName, completed } = req.body;
    const newTask = { taskName, completed };
    const parsedTask = createTodoSchema.safeParse(newTask);
    if (!parsedTask.success) {
      res.status(411).json({
        msg: 'You sent the wrong inputs',
      });
      return;
    }
    const task = await Task.create(newTask);

    res.status(201).json({ msg: 'Todo Added!', success: true, task });
  } catch (error) {
    throw new Error(error);
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ completed: 1, createdAt: -1 });
    res.status(200).json({ tasks });
  } catch (error) {
    throw new Error(error);
  }
});
app.delete('/task', async (req, res) => {
  try {
    const { id } = req.body;
    const task = await Task.findByIdAndDelete({ _id: id });
    if (task) {
      res.status(200).json({ msg: 'Task deleted', success: true });
    } else {
      res.status(404).json({ msg: 'Task not found', success: false });
    }
  } catch (error) {
    throw new Error(error);
  }
});

app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodoSchema.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: 'You sent the wrong inputs' });
    return;
  }

  const updatedTask = await Task.findByIdAndUpdate(
    { _id: req.body.id },
    { completed: req.body.completed },
    { new: true }
  );
  if (updatedTask) {
    res.status(200).json({ msg: 'Todo marked as Completed', success: true });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Could not connect to MongoDB');
    console.log(err);
  });
