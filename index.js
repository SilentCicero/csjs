'use strict';

var csjs = require('./csjs')(false);

module.exports = csjs;
module.exports.csjs = csjs;
module.exports.getCss = require('./get-css');
