module.exports = function (app, db, path) {
  app.get(`${path}`, (req, res) => {
    res.send(req.query);
  });
};
