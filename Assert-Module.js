//Description: The Assert module provides a set of assertion functions for performing runtime assertions in Node.js.
//Usage: The Assert module is helpful for writing tests and validating assumptions during development.
//Example: Asserting that a value is truthy.

const assert = require('assert');

const value = 10;
assert(value > 0, 'Value must be greater than 0');
