//Description: The Buffer module provides a way to handle binary data in Node.js, allowing you to work with raw memory.
//Usage: The Buffer module is used for manipulating binary data, such as reading from streams, handling network protocols, and working with file systems.
//Example: Creating a buffer from a string and converting it back to a string.

const buf = Buffer.from('Hello, World!', 'utf8');
console.log(buf.toString('utf8')); // Output: Hello, World!
