const testRoutes = require('./example_routes');

module.exports = function (app, db, path) {
  testRoutes(app, db, path);
};
