"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MfeAvatar = props => {
  //const style = props.className ? props.className : "default-avatar-style";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: props.className
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "default-avatar-style"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "default-avatar-span"
  }, props.text)));
};

var _default = MfeAvatar;
exports.default = _default;