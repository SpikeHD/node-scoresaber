"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var axios = require('axios');

var default_url = 'https://new.scoresaber.com';
/**
 * Like Player.find(), but does not automatically get a player, only retrieves a list
 * with some extra data.
 * 
 * @param {String} name 
 */

module.exports = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name) {
    var res, players;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios.get(default_url + '/api/players/by-name/' + name);

          case 2:
            res = _context.sent;
            players = res.data.players;
            return _context.abrupt("return", players);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();