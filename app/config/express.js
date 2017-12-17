const env = require('../environment');

const config = {
  port: normalizePort(process.env.PORT || 3000),
  ip: env.name === 'production' ? '0.0.0.0' : '127.0.0.1'
};

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort (val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

Object.freeze(config);

module.exports = config;
