const { readFile, readFileSync } = require('fs');

// this is a blocking approach
const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt)

console.log('This is ASAP')