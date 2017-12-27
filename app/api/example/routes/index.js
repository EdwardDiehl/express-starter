const exampleRoutes = require('./example_routes');

module.exports = function (app, db, path) {
  exampleRoutes(app, db, path);
};
