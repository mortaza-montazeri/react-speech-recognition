"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _reactHooks = require("@testing-library/react-hooks");

require("../tests/vendor/corti");

var _SpeechRecognition = _interopRequireWildcard(require("./SpeechRecognition"));

var _RecognitionManager = _interopRequireDefault(require("./RecognitionManager"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/first */
jest.mock('./isAndroid', function () {
  return function () {
    return true;
  };
});
jest.mock('./utils', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('./utils')), {}, {
    browserSupportsPolyfills: jest.fn()
  });
});

var mockRecognitionManager = function mockRecognitionManager() {
  var recognitionManager = new _RecognitionManager["default"](window.SpeechRecognition);

  _SpeechRecognition["default"].getRecognitionManager = function () {
    return recognitionManager;
  };

  return recognitionManager;
};

describe('SpeechRecognition (Android)', function () {
  beforeEach(function () {
    _utils.browserSupportsPolyfills.mockImplementation(function () {
      return true;
    });
  });
  test('sets browserSupportsContinuousListening to false on Android', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _renderHook, result, browserSupportsContinuousListening;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mockRecognitionManager();
            _renderHook = (0, _reactHooks.renderHook)(function () {
              return (0, _SpeechRecognition.useSpeechRecognition)();
            }), result = _renderHook.result;
            browserSupportsContinuousListening = result.current.browserSupportsContinuousListening;
            expect(browserSupportsContinuousListening).toEqual(false);
            expect(_SpeechRecognition["default"].browserSupportsContinuousListening()).toEqual(false);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('sets browserSupportsContinuousListening to true when using polyfill', function () {
    var MockSpeechRecognition = function MockSpeechRecognition() {
      _classCallCheck(this, MockSpeechRecognition);
    };

    _SpeechRecognition["default"].applyPolyfill(MockSpeechRecognition);

    var _renderHook2 = (0, _reactHooks.renderHook)(function () {
      return (0, _SpeechRecognition.useSpeechRecognition)();
    }),
        result = _renderHook2.result;

    var browserSupportsContinuousListening = result.current.browserSupportsContinuousListening;
    expect(browserSupportsContinuousListening).toEqual(true);
    expect(_SpeechRecognition["default"].browserSupportsContinuousListening()).toEqual(true);
  });
  test('sets browserSupportsContinuousListening to false when using polyfill on unsupported browser', function () {
    _utils.browserSupportsPolyfills.mockImplementation(function () {
      return false;
    });

    var MockSpeechRecognition = function MockSpeechRecognition() {
      _classCallCheck(this, MockSpeechRecognition);
    };

    _SpeechRecognition["default"].applyPolyfill(MockSpeechRecognition);

    var _renderHook3 = (0, _reactHooks.renderHook)(function () {
      return (0, _SpeechRecognition.useSpeechRecognition)();
    }),
        result = _renderHook3.result;

    var browserSupportsContinuousListening = result.current.browserSupportsContinuousListening;
    expect(browserSupportsContinuousListening).toEqual(false);
    expect(_SpeechRecognition["default"].browserSupportsContinuousListening()).toEqual(false);
  });
});