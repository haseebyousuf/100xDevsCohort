import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='app'>
      <TodoForm todos={todos} setTodos={setTodos} />
      <div className='todos-container'>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        ) : (
          <div className='todo-card'>
            <h3>No Todos created</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
