"use strict";

var _isAndroid = _interopRequireDefault(require("./isAndroid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mockUserAgent = function mockUserAgent(userAgent) {
  Object.defineProperty(navigator, 'userAgent', {
    value: userAgent,
    writable: true
  });
};

var mockUndefinedNavigator = function mockUndefinedNavigator() {
  Object.defineProperty(global, 'navigator', {
    value: undefined,
    writable: true
  });
};

describe('isAndroid', function () {
  test('returns false when navigator.userAgent does not contain android string', function () {
    mockUserAgent('safari browser');
    var result = (0, _isAndroid["default"])();
    expect(result).toEqual(false);
  });
  test('returns true when navigator.userAgent contains android string', function () {
    mockUserAgent('android browser');
    var result = (0, _isAndroid["default"])();
    expect(result).toEqual(true);
  });
  test('returns false when navigator is undefined', function () {
    mockUndefinedNavigator();
    var result = (0, _isAndroid["default"])();
    expect(result).toEqual(false);
  });
});