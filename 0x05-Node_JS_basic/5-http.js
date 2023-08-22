const http = require('http');
const fileRead = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.end('This is the list of our students');
    fileRead('database.csv');
  }
});

const port = 1245;

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
