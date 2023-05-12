//Description: The Path module provides utilities for working with file and directory paths.
//Usage: The Path module can be used to manipulate file paths, resolve relative paths, extract file extensions, and perform other path-related operations.
//Example: Joining two path segments to create a new path.

const path = require('path');

const fullPath = path.join('/path/to', 'file.txt');
console.log(fullPath); // Output: /path/to/file.txt
