const cardsRouter = require('express').Router();

const { getCards, createCard } = require('../controllers/cards');

cardsRouter.get('/cards', getCards);

cardsRouter.post('/card', createCard);

cardsRouter.delete('/cards/:cardId', createCard);

module.exports = cardsRouter;