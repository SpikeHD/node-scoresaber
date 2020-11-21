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

var Requests = /*#__PURE__*/function (_Base) {
  (0, _inherits2["default"])(Requests, _Base);

  var _super = _createSuper(Requests);

  /**
   * Empty constructor because we don't
   * need to do anything.
   */
  function Requests() {
    (0, _classCallCheck2["default"])(this, Requests);
    return _super.call(this);
  }
  /**
   * Get list of top ranked requests
   */


  (0, _createClass2["default"])(Requests, [{
    key: "getTop",
    value: function () {
      var _getTop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get(this.default_url + '/api/ranking/requests/top');

              case 2:
                res = _context.sent;
                data = res.data.requests;
                this.top = data;
                return _context.abrupt("return", this.top);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTop() {
        return _getTop.apply(this, arguments);
      }

      return getTop;
    }()
    /**
     * Get list of all ranked requests
     */

  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var res, data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get(this.default_url + '/api/ranking/requests/belowTop');

              case 2:
                res = _context2.sent;
                data = res.data.requests;
                this.all = data;
                return _context2.abrupt("return", this.all);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }]);
  return Requests;
}(Base);

module.exports = Requests;