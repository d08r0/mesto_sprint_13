const usersRouter = require('express').Router();

const { getUsers, createUser, getUser, patchUsers } = require('../controllers/users');

usersRouter.get('/users', getUsers);

usersRouter.post('/user', createUser);

usersRouter.get('/users/:id', getUser);

usersRouter.patch('/users/:id', patchUsers);

module.exports = usersRouter;
