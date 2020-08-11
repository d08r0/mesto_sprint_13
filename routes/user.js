const userRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

userRouter.get('/users/:id', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');

  fsPromises.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      const user = users.filter((item) => item._id === req.params.id);

      if (user.length === 0) {
        res.status(404);
        res.send({ error: 'Такого пользователя нет' });
        return;
      }

      res.status(200);
      res.contentType('JSON');
      res.send(user);
    })
    .catch(() => {
      res.status(500);
      res.contentType('JSON');
      res.send({ message: 'Внутренняя ошибка сервера' });
    });
});

module.exports = userRouter;
