//Description: The Querystring module provides utilities for parsing and formatting URL query strings.
//Usage: The Querystring module is helpful for working with URL query strings, encoding and decoding URL parameters.
//Example: Parsing a query string into an object.

const querystring = require('querystring');

const queryString = 'param1=value1&param2=value2';
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery); // Output: { param1: 'value1', param2: 'value2' }
