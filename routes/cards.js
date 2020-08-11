const cardsRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

cardsRouter.get('/cards', (req, res) => {
  const dataPath = path.join(__dirname, '../data/cards.json');

  fsPromises.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => {
      res.status(200);
      res.contentType('JSON');
      res.send(data);
    })
    .catch(() => {
      res.status(500);
      res.send({ message: 'Внутренняя ошибка сервера' });
    });
});

module.exports = cardsRouter;
