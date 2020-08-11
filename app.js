const express = require('express');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');
const userRouter = require('./routes/user.js');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(`${__dirname}/public`));

app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('/', userRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  res.status(404);
  res.contentType('JSON');
  error.status = 404;
  res.send({ message: 'Запрашиваемый ресурс не найден' });
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
