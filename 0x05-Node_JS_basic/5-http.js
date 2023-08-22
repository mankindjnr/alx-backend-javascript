const http = require("http");
const fileRead = require('./3-read_file_async')

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    app.get("/", (req, res) => {
        res.send('Hello Holberton School!');
    });

    app.get("/students", (req, res) => {
        res.send("This is the list of our students");
        fileRead("database.csv")
    });
});

module.exports = app;