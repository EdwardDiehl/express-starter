const testRoutes = require('./test_routes');

module.exports = function (app, db, path) {
  testRoutes(app, db, path);
};
