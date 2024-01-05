/* eslint-disable react/prop-types */
import { useState } from 'react';

const TodoForm = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState({
    id: '',
    title: '',
    description: '',
  });

  const addTodo = () => {
    if (newTodo.title === '' || newTodo.description === '') {
      alert('Please fill in all fields');
      return;
    }
    setTodos([...todos, { ...newTodo, id: Math.floor(Math.random() * 1000) }]);
    setNewTodo({ id: '', title: '', description: '' });
  };

  return (
    <div className='todo-form'>
      <input
        type='text'
        placeholder='Title'
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <input
        type='text'
        placeholder='Description'
        value={newTodo.description}
        onChange={(e) =>
          setNewTodo({ ...newTodo, description: e.target.value })
        }
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};
export default TodoForm;
