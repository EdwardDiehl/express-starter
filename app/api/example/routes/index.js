const exampleRoutes = require('./example_routes');

module.exports = function ({ path, app }) {
  exampleRoutes({ path, app });
};
