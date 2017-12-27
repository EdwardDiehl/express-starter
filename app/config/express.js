const normalizePort = require('../lib/normalize_port');

const config = {
  port: normalizePort(process.env.PORT || 3000),
  ip: process.env.IP || '127.0.0.1'
};

Object.freeze(config);

module.exports = config;
