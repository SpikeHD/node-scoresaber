"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var Base =
/**
 * Set defualt url, used for all API requests
 * 
 * I'm sure I can do more with this at some point
 */
function Base() {
  (0, _classCallCheck2["default"])(this, Base);
  this.default_url = 'https://new.scoresaber.com';
};

module.exports = Base;