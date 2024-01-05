/* eslint-disable react/prop-types */

const TodoCard = ({ todo, setTodos, todos }) => {
  return (
    <div className='todo-card' key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <div>
        <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
