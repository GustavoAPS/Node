const { readFile } = require('fs');

// this is a non-blocking approach
const txt = readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt)
});


console.log('This is ASAP')