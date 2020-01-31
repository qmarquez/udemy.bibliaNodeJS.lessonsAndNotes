const { SAVE, NO_SHUTERED_EVENT } = require('./events');
const Emitter = require('./emitter');
// or | const { EventEmitter } = require('events');

const emitter = new Emitter;
// or | const emitter = new EventEmitter;

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