//Description: The Process module provides information and control over the current Node.js process.
//Usage: The Process module allows you to access command-line arguments, environment variables, and provides methods for controlling the execution of the current process.
//Example: Listening for the 'exit' event to perform cleanup before the process exits.

process.on('exit', (code) => {
    console.log(`Process exited with code ${code}`);
    // Perform cleanup tasks here
  });
  