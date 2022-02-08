"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MfeButton = props => {
  const style = props.className ? props.className : "default-btn-style";
  const text = props.text ? props.text : "Click me";
  return /*#__PURE__*/_react.default.createElement("button", {
    className: style,
    onClick: props.onClick
  }, text);
};

var _default = MfeButton;
exports.default = _default;