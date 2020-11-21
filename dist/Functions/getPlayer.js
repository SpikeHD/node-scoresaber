"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var Player = require('../Classes/Player');

module.exports = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var player;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            player = new Player(id);
            _context.prev = 1;
            _context.next = 4;
            return player.get();

          case 4:
            return _context.abrupt("return", _context.sent);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            throw new Error('Could not find player. The ID was invalid, or the player does not exist');

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();