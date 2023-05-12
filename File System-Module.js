//Description: The FS module provides functionality for interacting with the file system, allowing you to read, write, and manipulate files and directories.
//Usage: The FS module can be used for tasks such as reading and writing files, creating directories, renaming files, and more.
//Example: Reading a file asynchronously and printing its contents.

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
