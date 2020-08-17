const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((user) => res.status(200).contentType('JSON').send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).contentType('JSON').send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getUser = (req, res) => {
  User.find({})
    .then((users) => {
      const user = users.filter((item) => JSON.stringify(item._id) === JSON.stringify(req.params.id));

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
};

module.exports.patchUsers = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(500);
      res.contentType('JSON');
      res.send({ message: 'Внутренняя ошибка сервера' });
    });
};
