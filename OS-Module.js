//Description: The OS module provides operating system-related utility methods and information.
//Usage: Usage: The OS module can be used to retrieve information about the operating system, such as the current user's home directory, platform, hostname, and more.
//Example: Getting the current user's home directory.

const os = require('os');

const homeDir = os.homedir();
console.log(homeDir);
