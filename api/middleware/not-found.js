const notFound = (request, response, next) => {
  response.status(404).json({
    message: `${request.method} ${request.url} not found`
  });
}

module.exports = notFound;