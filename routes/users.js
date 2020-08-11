const usersRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

usersRouter.get('/users', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');

  fsPromises.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => {
      res.status(200);
      res.contentType('JSON');
      res.send(data);
    })
    .catch(() => {
      res.status(500);
      res.contentType('JSON');
      res.send({ message: 'Внутренняя ошибка сервера' });
    });
});

module.exports = usersRouter;
