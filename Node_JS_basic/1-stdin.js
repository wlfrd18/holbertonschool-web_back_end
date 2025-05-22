process.stdout.write('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`\nYour name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stderr.write('This important software is now closing\n');
});
