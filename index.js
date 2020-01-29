const { SAVE, NO_SHUTERED_EVENT } = require('./events');
const { EventEmitter } = require('events');
// or | const Emitter = require('./emitter');

const emitter = new EventEmitter;
// or | const emitter = new Emitter;

emitter.on(SAVE, () => {
  console.log('on save activate 1.');
});

emitter.on(SAVE, () => {
  console.log('on save activate 2.');
});

emitter.on(NO_SHUTERED_EVENT, () => {
  console.log('no emmited event.')
})

emitter.emit(SAVE);