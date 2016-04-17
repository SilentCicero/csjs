'use strict';

var csjs = require('./lib/csjs');
csjs.prototype.unscoped = true;
csjs.unscoped = true;

module.exports = csjs;
