/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)
 */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
const PORT = 5001;

// 1.GET /todos - Retrieve all todo items
//   Description: Returns a list of all todo items.
//   Response: 200 OK with an array of todo items in JSON format.
//   Example: GET http://localhost:3000/todos

app.get('/todos', async (req, res) => {
  try {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
      if (err) throw err;
      res.status(200).json(JSON.parse(data));
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// 2.GET /todos/:id - Retrieve a specific todo item by ID
//   Description: Returns a specific todo item identified by its ID.
//   Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
//   Example: GET http://localhost:3000/todos/123

app.get('/todos/:id', (req, res) => {
  try {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
      if (err) throw err;
      const todos = JSON.parse(data);
      const todo = todos.find((t) => t.id === parseInt(req.params.id));
      console.log(todo);
      if (!todo) {
        res.status(404).send('No Todo Found');
      } else {
        res.status(200).json(todo);
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// 3. POST /todos - Create a new todo item
// Description: Creates a new todo item.
// Request Body: JSON object representing the todo item.
// Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
// Example: POST http://localhost:3000/todos
// Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    completed: req.body.completed,
    description: req.body.description,
  };
  fs.readFile('todos.json', 'utf-8', (err, data) => {
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile('todos.json', JSON.stringify(todos, null, 2), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

// 4. PUT /todos/:id - Update an existing todo item by ID
// Description: Updates an existing todo item identified by its ID.
// Request Body: JSON object representing the updated todo item.
// Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
// Example: PUT http://localhost:3000/todos/123
// Request Body: { "title": "Buy groceries", "completed": true }
app.put('/todos/:id', (req, res) => {
  try {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
      if (err) throw err;
      const todos = JSON.parse(data);
      const todoIndex = todos.findIndex(
        (todo) => todo.id === parseInt(req.params.id)
      );
      if (todoIndex === -1) {
        res.status(404).send('Todo Not Found');
      } else {
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].completed = req.body.completed;
        todos[todoIndex].description = req.body.description;
        fs.writeFile('todos.json', JSON.stringify(todos, null, 2), (err) => {
          if (err) throw err;
          res
            .status(200)
            .json({ message: 'Todo Updated', updatedTodo: todos[todoIndex] });
        });
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// 5. DELETE /todos/:id - Delete a todo item by ID
// Description: Deletes a todo item identified by its ID.
// Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
// Example: DELETE http://localhost:3000/todos/123
app.delete('/todos/:id', (req, res) => {
  try {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
      if (err) throw err;
      const todos = JSON.parse(data);
      const todoIndex = todos.findIndex(
        (todo) => todo.id === parseInt(req.params.id)
      );
      if (todoIndex === -1) {
        res.status(404).send('Todo Not Found');
      } else {
        todos.splice(todoIndex, 1);
        fs.writeFile('todos.json', JSON.stringify(todos, null, 2), (err) => {
          if (err) throw err;
          res.status(200).json({ message: 'Todo Deleted' });
        });
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
