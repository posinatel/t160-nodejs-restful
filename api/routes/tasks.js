const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

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
  response.status(204).json(db);
});

router.get('/:taskId', (request, response) => {
  const id = request.params.taskId;
  response.status(200).json({
    message: `Task with ID = ${id} was fetched`
  });
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