// 1-stdin.js

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', (data) => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
