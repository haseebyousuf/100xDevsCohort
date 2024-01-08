import { useEffect, useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import { Toaster } from 'react-hot-toast';

function App() {
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    const response = await fetch('http://localhost:5001/tasks', {
      method: 'GET',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const data = await response.json();

    setTasks(data.tasks);
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className='max-w-[400px] m-auto p-4 text-center'>
      <Toaster position='top-right' />
      <Header />
      <TodoForm getTasks={getTasks} />
      <TodoCard tasks={tasks} setTasks={setTasks} getTasks={getTasks} />
    </div>
  );
}

export default App;
