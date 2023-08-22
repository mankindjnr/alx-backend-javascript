const express = require('express');
const fileRead = require('./3.dup');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fileRead('database.csv')
    .then((result) => {
      res.end(`This is the list of our students\n${result}`);
    })
    .catch((err) => {
      console.error(err.message);
    });
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
