const readline = require('readline');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

readLine.on('line', (input) => {
  // Quand on reçoit une ligne, on affiche la réponse
  console.log(`Your name is: ${input}`);
});

// Quand l'utilisateur fait Ctrl+D (EOF), on affiche le message et on ferme
readLine.on('close', () => {
  console.log('This important software is now closing');
});
