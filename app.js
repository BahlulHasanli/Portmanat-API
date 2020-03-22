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
  try {
    const check = new portmanat(
      14087,
      req.body.s_id,
      'b@belshow9596',
      req.body.o_id,
      req.body.transaction,
      req.body.method,
      req.body.amount,
      req.body.test,
      req.body.hash
    );

    res.send(check.result()).status(201);
  } catch (err) {
    res.status(400).send();
  }
});

app.get('/result', (req, res) => {
  res.send('result api');
});
app.listen(PORT, () => console.log('Server run up!'));
