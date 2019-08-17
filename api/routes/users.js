const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.json([
    'João',
    'Lucas',
    'Michel',
    'Rodrigo'
  ])
});

module.exports = router;