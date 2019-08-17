const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
  response.status(200).json({
    message: 'Task was created'
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

router.patch('/:taskId', (request, response) => {
  const id = request.params.taskId;
  response.status(200).json({
    message: `Update task with ID = ${id}`
  });
});

router.delete('/:taskId', (request, response) => {
  const id = request.params.taskId;
  response.status(200).json({
    message: `Delete task with ID = ${id}`
  });
});

module.exports = router;