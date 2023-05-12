//Description: The Stream module provides an interface for working with streaming data, allowing you to read from and write to streams of data.
//Usage: The Stream module is useful for handling large amounts of data or processing data in chunks, such as reading files, making HTTP requests, or compressing data.
//Example: Piping data from a readable stream to a writable stream.

const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);
