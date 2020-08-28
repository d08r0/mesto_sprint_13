const usersRouter = require('express').Router();

const {
  getUsers, getUser, patchUsers,
} = require('../controllers/users');

usersRouter.get('/users', getUsers);

usersRouter.get('/users/:id', getUser);

usersRouter.patch('/users/me', patchUsers);

module.exports = usersRouter;
