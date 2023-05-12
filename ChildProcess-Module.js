//Description: The Child Process module enables the creation and management of child processes from within a Node.js application.
//Usage: The Child Process module allows you to execute commands in child processes, communicate with them, and handle their output.
//Example: Executing a command in a child process.

const { exec } = require('child_process');

exec('ls -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  console.log(stdout);
});
