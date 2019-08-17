const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, (request, response) => {
  const task = {
    done: request.body.done,
    description: request.body.description
  }
  response.status(200).json({
    message: 'Task was created',
    task
  });
});

router.get('/', (request, response) => {
  response.status(200).json({
    message: 'Tasks were fetched'
  });
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