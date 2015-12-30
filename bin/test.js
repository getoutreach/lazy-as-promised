'use strict';

const Mocha = require('mocha');

require('mocha-lazy-bdd');

const mocha = new Mocha({
  reporter: 'spec',
  ui: 'lazy-bdd'
});

mocha.addFile('test/lazy-as-promised_spec.js');

mocha.run(function(failures) {
  process.on('exit', function() {
    process.exit(failures);
  });
});
