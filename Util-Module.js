//Description: The Util module provides various utility functions that are helpful for debugging, formatting, and working with objects.
//Usage: The Util module offers functions for formatting strings, debugging, inspecting objects, and working with error objects.
//Example: Using the util.format() function to format a string.

const util = require('util');

const name = 'John';
const message = util.format('Hello, %s!', name);
console.log(message); // Output: Hello, John!
