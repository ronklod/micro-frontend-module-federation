"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MfeText = props => {
  const style = props.className ? props.className : "default-text-style";
  return /*#__PURE__*/_react.default.createElement("input", {
    onChange: props.onChange,
    type: "text",
    className: style
  });
};

var _default = MfeText;
exports.default = _default;