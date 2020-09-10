"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var axios = require('axios');

var default_url = 'https://new.scoresaber.com';
/**
 * So far, Scoresaber does not have song support
 * in their new site, which means no API support
 * yet either. This is basically just here as a 
 * skeleton class for now.
 */

var Song = function Song(id) {
  (0, _classCallCheck2["default"])(this, Song);
  if (!id) throw Error('No ID provided in Song() constructor');
  this.id = id;
};

module.exports = Song;