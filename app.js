'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Call Portmanat API class
const portmanat = require('./classes/api.class');

// Template Engine EJS
app.set('view engine', 'ejs');
app.set('views', './templates');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Main route
app.get('/', (req, res) => {
  res.render('index');
});

// Result Route
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
  } catch (err) {
    res.json(err);
  }
});

app.listen(PORT, () => console.log('Server run up!'));
