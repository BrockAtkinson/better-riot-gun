'use strict';

function reqs() {
  require('riot');
}

function init(name, ui) {
  require('view/app');
  var Gun = require('gun');
  Gun.chain.convert = require('rounds');

  var opts = {
    db: new Gun()
  };
  ui.mount(name, opts)
}

module.exports = init;