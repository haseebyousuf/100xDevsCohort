/* eslint-disable react/prop-types */
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlinePlus } from 'react-icons/ai';
const TodoForm = ({ getTasks }) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task === '') {
      alert('Enter some Task Man!');
      return;
    }
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      taskName: task,
      completed: false,
    };
    const response = await fetch('http://localhost:5001/task', {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      toast.success('Task Added Successfully!');
      getTasks();
      setTask('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='relative flex items-center justify-center w-full'>
        <AiOutlinePlus
          onClick={handleSubmit}
          className='absolute right-[20px] top-0 text-[25px] cursor-pointer h-full text-[#4b00ff]'
        />
        <input
          className='w-full h-10 px-3 text-lg border-2 border-gray-300 rounded-md outline-none'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type='text'
          placeholder='Add a Task'
        />
      </div>
    </form>
  );
};

export default TodoForm;
