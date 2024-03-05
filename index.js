const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const tasks = [];

app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

module.exports = app;
