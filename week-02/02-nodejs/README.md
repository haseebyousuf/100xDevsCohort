# Node.js Assignments

## [In Memory TODO](/todoServer.js)

create an express HTTP server in Node.js which will handle the logic of a todo list app. Don't use any database, just store all the data in an array to store the todo list data (in-memory)

```js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
let todos = [];

// 1.GET /todos - Retrieve all todo items
//   Description: Returns a list of all todo items.
//   Response: 200 OK with an array of todo items in JSON format.
//   Example: GET http://localhost:3000/todos

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// 2.GET /todos/:id - Retrieve a specific todo item by ID
//   Description: Returns a specific todo item identified by its ID.
//   Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
//   Example: GET http://localhost:3000/todos/123

app.get('/todos/:id', (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) res.status(404).send();
  res.status(200).json(todo);
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
    description: req.body.description,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 4. PUT /todos/:id - Update an existing todo item by ID
// Description: Updates an existing todo item identified by its ID.
// Request Body: JSON object representing the updated todo item.
// Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
// Example: PUT http://localhost:3000/todos/123
// Request Body: { "title": "Buy groceries", "completed": true }
app.put('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  );
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    res.json(todos[todoIndex]);
  }
});

// 5. DELETE /todos/:id - Delete a todo item by ID
// Description: Deletes a todo item identified by its ID.
// Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
// Example: DELETE http://localhost:3000/todos/123
app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  );
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos.splice(todoIndex, 1);
    res.status(200).send();
  }
});

app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});
```

## [Todo in File](/todoFileServer.js)

You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

```js
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
```

## [File Server](/fileServer.js)

You need to create an express HTTP server in Node.js which will handle the logic of a file server.

- Use built in Node.js `fs` module
  The expected API endpoints are defined below,

1. GET /files - Returns a list of files present in `./files/` directory
   Response: 200 OK with an array of file names in JSON format.
   Example: GET <http://localhost:3000/files>
2. GET /file/:filename - Returns content of given file by name
   Description: Use the filename from the request path parameter to read the file from `./files/` directory
   Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
   Example: GET <http://localhost:3000/file/example.txt>
   - For any other route not defined in the server return 404
     Testing the server - run `npm run test-fileServer` command in terminal

```js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', (req, res) => {
  const dirPath = path.join(__dirname, './files/');
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    res.json(files);
  });
});

app.get('/file/:filename', (req, res) => {
  const filePath = path.join(__dirname, './files/', req.params.filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    res.status(200).send(data);
  });
});

app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});
```

## Assignments

In this series of assignments, you are going to create native HTTP servers in Node.js which will handle different kinds of application logics.

You are provided empty JavaScript files (or having function signatures) in this directory. You have to follow the instructions given in each file and then run automated tests (also mentioned in each file) to check if you have successfully completed the assignment or you still have few more things to learn in it 😜
Recommended order of attempting the assignments.

1. Todo List App
2. File Server

## Important Notes

1. If you are unable to understand the request/response of any assignment file or whatever the way it is being tested, you can take a look at its respective test file present in `tests/` directory.
2. Don't try to make any changes to the test files present in the `tests/` directory.
3. Don't make any changes to the code already present in files including function/method/class signatures and module exports.
4. To run individual tests -

- npm run test-fileServer
- npm run test-todoServer

## Development Setup

1. Install the dependencies used by running `npm install` command in your terminal.
2. We used `18.x.y` Node.js version, if anything doesn't work then please consider upgrading your node installation.
