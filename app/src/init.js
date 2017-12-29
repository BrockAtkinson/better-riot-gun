'use strict';

function reqs() {
  require('riot');
}

function deps() {
  require('view/app');
  require('view/utils/gun');
}

function init(name, ui) {
  deps();
  var Gun = require('gun');
  Gun.chain.convert = require('rounds');
  var opts = {
    db: new Gun()
  };
  ui.mount(name, opts)
}

module.exports = init;