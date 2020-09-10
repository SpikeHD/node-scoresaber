"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var axios = require('axios');

var default_url = 'https://new.scoresaber.com';

var Request = /*#__PURE__*/function () {
  /**
   * Assigns ID
   * 
   * @param {Number|String} id 
   */
  function Request(id) {
    (0, _classCallCheck2["default"])(this, Request);
    if (!id) throw Error('No ID provided in Request() constructor');
    this.request = id;
  }
  /**
   * Use ID to get song request data
   */


  (0, _createClass2["default"])(Request, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res, data, info;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get(default_url + '/api/ranking/request/' + this.request);

              case 2:
                res = _context.sent;
                data = res.data.request;
                info = data.info;
                this.songId = info.songId;
                this.requestType = info.requestType;
                this.description = info.description;
                this.approved = info.approved === 0;
                this.id = info.id;
                this.name = info.name;
                this.author = info.levelAuthorName;
                this.difficulty = info.difficulty;
                this.rankUpvotes = info.rankVotes.upvotes;
                this.rankDownvotes = info.rankVotes.downvotes;
                this.qatUpvotes = info.qatVotes.upvotes;
                this.qatDownvotes = info.qatVotes.downvotes;
                this.rankComments = info.rankComments;
                this.qatComments = info.qatComments;
                this.difficulties = data.difficulties;

              case 20:
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
  return Request;
}();

module.exports = Request;