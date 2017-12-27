const config = {
  name: process.env.NODE_ENV || 'development'
};

Object.freeze(config);

module.exports = config;
