//Description: The Duplex module is a type of stream that can be both readable and writable, allowing for bidirectional data flow.
//Usage: The Duplex module is useful when you need a stream that can both read and write data, allowing bidirectional communication.
//Example: Creating a duplex stream and piping data through it.

const { Duplex } = require('stream');

const myDuplex = new Duplex({
  write(chunk, encoding, callback) {
    console.log(`Received data: ${chunk.toString()}`);
    callback();
  },
  read(size) {
    this.push('Sample data');
    this.push(null); // Signals the end of data
  }
});

myDuplex.pipe(process.stdout);
