const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const originalLog = console.log;
    const logs = [];

    // Interception des logs
    console.log = (msg) => logs.push(msg);

    countStudents(process.argv[2])
      .then(() => {
        console.log = originalLog; // Restaure console.log
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${logs.join('\n')}`);
      })
      .catch((err) => {
        console.log = originalLog;
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1245);
module.exports = app;
