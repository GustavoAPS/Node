const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log("nham nham")
})

eventEmitter.emit('lunch')
eventEmitter.emit('lunch')