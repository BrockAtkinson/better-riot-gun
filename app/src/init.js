'use strict';

function reqs() {
  require('riot');
}

function init(name, ui) {
  require('view/app');
  var Gun = require('gun');
  Gun.chain.convert = require('rounds');

  const rel_ = Gun.val.rel._;  // '#'
  const node_ = Gun.node._;  // '_'

  Gun.chain.unset = function(node){
    if( this && node && node[node_] && node[node_].put && node[node_].put[node_] && node[node_].put[node_][rel_] )
      this.put( { [node[node_].put[node_][rel_]]:null} );
    return this;
  }

  var opts = {
    db: new Gun()
  };
  ui.mount(name, opts)
}

module.exports = init;