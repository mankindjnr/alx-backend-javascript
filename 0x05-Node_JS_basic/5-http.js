const http = require('http');
const fileRead = require('./3.dup');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    fileRead('database.csv')
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
});

const port = 1245;

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
