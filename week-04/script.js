let globalId = 1;
let todoState = [];
let oldTodoState = [];

function addTodoToDom(todo) {
  const todoList = document.getElementById('todos');
  const todoItem = document.createElement('div');
  todoItem.setAttribute('id', `todo-${todo.id}`);
  todoItem.innerHTML = `
    <h3>${todo.title}</h3>
    <p>${todo.description}</p>
    <button onclick="deleteTodoById(${todo.id})">Delete</button>
    <button onclick="promptUpdate(${todo.id})">Update</button>
  `;
  todoList.appendChild(todoItem);
}

function removeTodoFromDom(todo) {
  const todoItem = document.getElementById(`todo-${todo.id}`);
  if (todoItem) {
    todoItem.remove();
  }
}

function updateTodoInDom(oldTodo, newTodo) {
  const todoItem = document.getElementById(`todo-${oldTodo.id}`);
  if (todoItem) {
    todoItem.innerHTML = `
      <h3>${newTodo.title}</h3>
      <p>${newTodo.description}</p>
      <button onclick="deleteTodoById(${newTodo.id})">Delete</button>
      <button onclick="promptUpdate(${newTodo.id})">Update</button>
    `;
  }
}

function updateState(newTodos) {
  const added = newTodos.filter(
    (newTodo) => !oldTodoState.some((oldTodo) => oldTodo.id === newTodo.id)
  );
  const deleted = oldTodoState.filter(
    (oldTodo) => !newTodos.some((newTodo) => newTodo.id === oldTodo.id)
  );
  const updated = newTodos.filter((newTodo) =>
    oldTodoState.some(
      (oldTodo) => oldTodo.id === newTodo.id && oldTodo.title !== newTodo.title
    )
  );

  added.forEach(addTodoToDom);
  deleted.forEach(removeTodoFromDom);
  updated.forEach((newTodo) => {
    const oldTodo = oldTodoState.find((oldTodo) => oldTodo.id === newTodo.id);
    updateTodoInDom(oldTodo, newTodo);
  });

  oldTodoState = [...newTodos];
}

function addTodo() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  todoState.push({
    title: title,
    description: description,
    id: globalId++,
  });
  updateState(todoState);
}

function deleteTodoById(todoId) {
  todoState = todoState.filter((todo) => todo.id !== todoId);
  updateState(todoState);
}

function promptUpdate(todoId) {
  const newTitle = prompt('Enter new title:');
  const newDescription = prompt('Enter new description:');
  if (newTitle !== null && newDescription !== null) {
    updateTodoById(todoId, newTitle, newDescription);
  }
}

function updateTodoById(todoId, newTitle, newDescription) {
  todoState = todoState.map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, title: newTitle, description: newDescription };
    }
    return todo;
  });
  updateState(todoState);
}
