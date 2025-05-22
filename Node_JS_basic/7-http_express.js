const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const dbFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let logs = [];
  const originalLog = console.log;

  // Redirige console.log vers notre tableau logs
  console.log = (msg) => logs.push(msg);

  try {
    await countStudents(dbFile);
    // Restaure console.log
    console.log = originalLog;
    res.type('text/plain');
    res.send(`This is the list of our students\n${logs.join('\n')}`);
  } catch (err) {
    // Restaure console.log en cas d'erreur aussi
    console.log = originalLog;
    res.type('text/plain');
    res.status(500).send(`This is the list of our students\n${err.message}`);
  }
});

app.listen(1245);

module.exports = app;
