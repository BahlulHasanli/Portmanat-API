'use strict';

const path = require('path');
const express = require('express');
const app = express();

const api = require('./portmanat.class');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/result', (req, res) => {
  const { s_id, o_id, transaction, method, amount, test, hash } = req.body;

  const portmanat = new api(
    123456,
    s_id,
    '123456',
    o_id,
    transaction,
    method,
    amount,
    test,
    hash
  );

  try {
    const result = portmanat.result();

    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

app.listen(3838, () => console.log('Server run app'));
