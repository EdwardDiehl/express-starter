const express = require('express');
const app = express();
const logger = require('express-pino-logger')();
const config = require('./config');

app.use(logger);

require('./api/example/routes')(app, {}, '/example');

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = config.env.name === 'development' ? err : {};

  // send the error
  const statusCode = err.status || 500;
  res.status(statusCode);
  res.send({'error': statusCode});
});

module.exports = app;
