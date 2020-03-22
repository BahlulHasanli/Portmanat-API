const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const portmanat = require('./classes/api.class');

app.use(express.json());
app.set('view engine', 'html');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const check = new portmanat(
    14087,
    12147,
    'b@belshow9596',
    22,
    req.body.transaction,
    'account',
    20,
    req.body.test,
    req.body.hash
  );

  res.send('API' + ' ' + check.result());
});
app.listen(PORT, () => console.log('Server run up!'));
