const express = require("express");
const { v4: uuidv4 } = require("uuid");

const toDoRouter = express.Router();

const todos = [
  { task: "Buy groceries", description: "Grab ingredients for meal prep", completed: false, _id: uuidv4() },
  { task: "Meal prep", description: "Cook and store food for week", completed: false, _id: uuidv4() },
  { task: "Do laundry", description: "Wash and fold clothes", completed: true, _id: uuidv4() }
];

// get all todos
toDoRouter.get("/", (req, res) => {
  res.send(todos);
});

// get one todo by id
toDoRouter.get("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const foundTodo = todos.find(todo => todo._id === todoId);
  if (!foundTodo) return res.status(404).send("Todo not found");
  res.send(foundTodo);
});

// post a new todo
toDoRouter.post("/", (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuidv4();
  todos.push(newTodo);
  res.send(`Successfully added todo! Here's its ID: ${newTodo._id}`);
});

// update a todo by id
toDoRouter.put("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex(todo => todo._id === todoId);
  if (todoIndex === -1) return res.status(404).send("Todo not found");
  const updatedTodo = Object.assign(todos[todoIndex], req.body);
  res.send(updatedTodo);
});

// delete a todo by id
toDoRouter.delete("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex(todo => todo._id === todoId);
  if (todoIndex === -1) return res.status(404).send("Todo not found");
  todos.splice(todoIndex, 1);
  res.send(todos);
});

module.exports = toDoRouter;
