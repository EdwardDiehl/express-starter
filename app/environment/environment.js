const environment = {
  name: process.env.NODE_ENV || 'development'
};

Object.freeze(environment);

module.exports = environment;
