//Description: The Crypto module provides cryptographic functionality, including encryption, hashing, and digital signatures.
//Usage: The Crypto module can be used to secure data, generate hashes, create digital signatures, and perform other cryptographic operations.
//Example: Generating an MD5 hash of a string.

const crypto = require('crypto');

const hash = crypto.createHash('md5');
hash.update('Hello, World!');
const digest = hash.digest('hex');
console.log(digest); // Output: 6cd3556deb0da54bca060b4c39479839
