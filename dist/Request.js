"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

var axios = require('axios');

var Base = require('./Base');

var Request = /*#__PURE__*/function (_Base) {
  (0, _inherits2["default"])(Request, _Base);

  var _super = _createSuper(Request);

  /**
   * Assigns ID
   * 
   * @param {Number|String} id 
   */
  function Request(id) {
    var _this;

    (0, _classCallCheck2["default"])(this, Request);
    _this = _super.call(this);
    if (!id) throw Error('No ID provided in Request() constructor');
    _this.request = id;
    return _this;
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
                return axios.get(this.default_url + '/api/ranking/request/' + this.request);

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
}(Base);

module.exports = Request;