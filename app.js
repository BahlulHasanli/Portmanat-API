'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const portmanat = require('./classes/api.class');

app.set('view engine', 'ejs');
app.set('views', './templates');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/result', async (req, res) => {
  const portmanatData = new portmanat(
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

  try {
    const CheckoutData = portmanatData.result();

    res.json(CheckoutData);

    // res.sendStatus(200);
  } catch (err) {
    res.sendStatus(404);
  }
});

app.get('/result', (req, res) => {
  check.result();
  res.send('result api');
});
app.listen(PORT, () => console.log('Server run up!'));
