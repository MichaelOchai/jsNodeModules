//Description: The readline module provides an interface for reading input from a Readable stream, such as the command line.
//Usage: The readline module allows you to create interactive command-line interfaces by reading input and providing prompts.
//Example:

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
