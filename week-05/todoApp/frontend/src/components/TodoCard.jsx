/* eslint-disable react/prop-types */
import { AiOutlineClose } from 'react-icons/ai';
import toast from 'react-hot-toast';

const TodoCard = ({ tasks, getTasks }) => {
  //delete task
  const deleteTask = async (id) => {
    // let filteredTasks = [...tasks].filter((task) => task.id !== id);
    // setTasks(filteredTasks);
    const response = await fetch('http://localhost:5001/task', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      toast.success('Task Deleted');
      getTasks();
    }
  };

  //toggle completed
  const toggleComplete = async (id, isCompleted) => {
    const completed = !isCompleted;
    const response = await fetch('http://localhost:5001/completed', {
      method: 'PUT',
      body: JSON.stringify({ id, completed }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      // alert('completed');
      toast.success('Task Completed');
      getTasks();
    }
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, completed: !task.completed } : task
    //   )
    // );
  };

  return (
    <div>
      {tasks &&
        tasks.map((task) => (
          <div
            key={task._id}
            className={`transition-all duration-300 ease-out border-2 border-gray-300 rounded-md w-full h-14 px-2 my-4 flex items-center justify-between ${
              task.completed ? 'bg-[#ccc] line-through' : ''
            }`}
          >
            <p className='flex flex-wrap gap-2 capitalize'>
              <input
                className='accent-emerald-600 mx-[2px] h-[20px] w-[20px]'
                type='checkbox'
                defaultChecked={task.completed}
                onClick={() => toggleComplete(task._id, task.completed)}
              ></input>
              {task.taskName}
            </p>
            <AiOutlineClose
              onClick={() => deleteTask(task._id)}
              className='text-red-600 cursor-pointer'
            />
          </div>
        ))}
    </div>
  );
};

export default TodoCard;
