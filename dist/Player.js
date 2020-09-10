"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var axios = require('axios');

var default_url = 'https://new.scoresaber.com';

var Player = /*#__PURE__*/function () {
  function Player(id) {
    (0, _classCallCheck2["default"])(this, Player);
    if (!id) throw Error('No ID provided in Player() constructor');
    this.id = id;
  }

  (0, _createClass2["default"])(Player, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get(default_url + '/api/player/' + this.id + '/full');

              case 2:
                res = _context.sent;
                data = res.data.playerInfo;
                this.name = data.playerName;
                this.avatar_url = default_url + data.avatar;
                this.rank = data.rank;
                this.countryRank = data.countryRank;
                this.country = data.country;
                this.pp = data.pp;
                this.role = data.role;
                this.badges = data.badges;
                this.isBanned = data.banned === 1;
                this.isInactive = data.inactive === 1;
                this.totalScore = res.data.scoreStats.totalScore;
                this.totalRankedScore = res.data.scoreStats.totalRankedScore;
                this.averageRankedAccuracy = res.data.scoreStats.averageRankedAccuracy;
                this.playCount = res.data.scoreStats.totalPlayCount;
                this.rankedPlayCount = res.data.scoreStats.rankedPlayCount;

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);
  return Player;
}();

module.exports = Player;