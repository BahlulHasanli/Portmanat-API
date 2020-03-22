'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const portmanat = require('./classes/api.class');

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './templates');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/result', (req, res) => {
  const check = new portmanat(
    14087,
    req.body.o_id,
    'b@belshow9596',
    22,
    req.body.transaction,
    'account',
    20,
    req.body.test,
    req.body.hash
  );

  check.result();

  res.statusCode(201);
});

app.get('/result', (req, res) => {
  res.send('result api');
});
app.listen(PORT, () => console.log('Server run up!'));
