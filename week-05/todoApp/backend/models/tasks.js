import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Task = new mongoose.model('Task', taskSchema);

export default Task;
