"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var axios = require('axios');

var default_url = 'https://new.scoresaber.com';

var Player = /*#__PURE__*/function () {
  /**
   * Assigns ID
   * 
   * @param {Number|String} id 
   */
  function Player(id) {
    (0, _classCallCheck2["default"])(this, Player);
    this.id = id;
  }
  /**
   * Get player data and score data
   */


  (0, _createClass2["default"])(Player, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.id) {
                  _context.next = 2;
                  break;
                }

                throw Error('Current object has no ID. Did you forget to provide one in the constructor or .find()?');

              case 2:
                _context.next = 4;
                return axios.get(default_url + '/api/player/' + this.id + '/full');

              case 4:
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

              case 21:
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
    /**
     * Find and get the first player using a search term. If no player exists, don't do anything
     * and return false.
     * 
     * @param {String} name 
     */

  }, {
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(name) {
        var res, players;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get(default_url + '/api/players/by-name/' + name);

              case 2:
                res = _context2.sent;
                players = res.data.players; // If at least one player shows up in the search, get() them

                if (!players[0]) {
                  _context2.next = 9;
                  break;
                }

                this.id = players[0].playerId;
                _context2.next = 8;
                return this.get();

              case 8:
                return _context2.abrupt("return", true);

              case 9:
                return _context2.abrupt("return", false);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function find(_x) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
    /**
     * Get top scores of player based on page number
     * 
     * @param {Number} num 
     */

  }, {
    key: "getTopScores",
    value: function () {
      var _getTopScores = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var num,
            res,
            data,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                num = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 1;
                _context3.next = 3;
                return axios.get(default_url + '/api/player/' + this.id + '/scores/top/' + num);

              case 3:
                res = _context3.sent;
                data = res.data;
                return _context3.abrupt("return", data.scores);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getTopScores() {
        return _getTopScores.apply(this, arguments);
      }

      return getTopScores;
    }()
    /**
     * Get recent scores of player based on page number
     * 
     * @param {Number} num 
     */

  }, {
    key: "getTopScores",
    value: function () {
      var _getTopScores2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var num,
            res,
            data,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                num = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 1;
                _context4.next = 3;
                return axios.get(default_url + '/api/player/' + this.id + '/scores/recent/' + num);

              case 3:
                res = _context4.sent;
                data = res.data;
                return _context4.abrupt("return", data.scores);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getTopScores() {
        return _getTopScores2.apply(this, arguments);
      }

      return getTopScores;
    }()
  }]);
  return Player;
}();

module.exports = Player;