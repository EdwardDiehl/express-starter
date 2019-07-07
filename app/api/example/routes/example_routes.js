module.exports = function ({ path, app }) {
  app.get(`${path}`, (req, res) => {
    res.send(req.query);
  });
};
