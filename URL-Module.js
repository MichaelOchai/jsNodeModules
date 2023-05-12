//Description: The URL module provides utilities for URL parsing and formatting.
//Usage: The URL module is useful for parsing, manipulating, and formatting URLs within your applications.
//Example: Parsing a URL string and extracting its components.

const url = require('url');

const urlString = 'https://www.example.com/path?param1=value1';
const parsedUrl = new URL(urlString);

console.log(parsedUrl.hostname); // Output: www.example.com
console.log(parsedUrl.pathname); // Output: /path
console.log(parsedUrl.search);   // Output: ?param1=value1
