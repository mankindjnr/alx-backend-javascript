const http = require('http');
const fileRead = require('./3.dup');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end("Hello Holberton School!");
    } else if (req.url === "/students") {
        res.end("This is the list of our students");
        async function main() {
            try {
              const result = await fileRead('database.csv');
              console.log(result);
            } catch (err) {
              console.error(err.message);
            }
          }
          
          main();;
    }
});

const port = 1245;

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
