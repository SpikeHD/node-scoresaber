"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var axios = require('axios');

var default_url = 'https://new.scoresaber.com';

var Song = function Song(id) {
  (0, _classCallCheck2["default"])(this, Song);
  if (!id) throw Error('No ID provided in Song() constructor');
  this.id = id;
};

module.exports = Song;