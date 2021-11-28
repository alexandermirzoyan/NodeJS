const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConnect = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnect()
  .then((res) => {
    console.log(res);
    app.listen(8000, () => console.log('Server listening successfully'));
  })
  .catch((err) => console.log(err));
