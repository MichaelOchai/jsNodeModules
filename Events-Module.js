//Description: The Events module provides a way to handle and emit events in Node.js.
//Usage: The Events module allows you to create and handle custom events in your applications, facilitating communication between different parts of your code.
//Example: Creating and emitting a custom event.

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('myEvent', () => {
  console.log('Custom event emitted!');
});

myEmitter.emit('myEvent');
