//Description: The punycode module provides utilities for encoding and decoding Punycode strings, which are used for internationalized domain names (IDNs).
//Usage: The punycode module allows you to convert Unicode strings to Punycode and vice versa.
//Examples:

const punycode = require('punycode');

const encoded = punycode.encode('example.com');
console.log(encoded); // Output: "example.com"

const decoded = punycode.decode('xn--example-6q4c.com');
console.log(decoded); // Output: "example.com"
