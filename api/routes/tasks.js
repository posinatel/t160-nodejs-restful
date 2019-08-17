const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/not-found');

let db = {};
let sequence = 0;

router.post('/', checkAuth, (request, response) => {
  const newTask = {
    id: ++sequence,
    done: request.body.done || false,
    description: request.body.description
  }

  db[newTask.id] = newTask;

  response.status(201).json(newTask);
});

router.get('/', (request, response) => {
  const toArray = key => db[key];
  const tasks = Object.keys(db).map(toArray);

  tasks.length
    ? response.json(tasks)
    : response.status(204);
});

router.get('/:taskId', (request, response) => {
  const task = db[request.params.taskId];
  task
    ? response.json(task)
    : notFound(request, response)
});

router.patch('/:taskId', checkAuth, (request, response) => {
  const id = request.params.taskId;
  response.status(200).json({
    message: `Update task with ID = ${id}`
  });
});

router.delete('/:taskId', checkAuth, (request, response) => {
  const id = request.params.taskId;
  response.status(200).json({
    message: `Delete task with ID = ${id}`
  });
});

module.exports = router;