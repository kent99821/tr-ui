"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn"
  }, "\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6\u6309\u94AE", text);
};

Button.prototype = {
  text: _propTypes.default.any
};
var _default = Button;
exports.default = _default;