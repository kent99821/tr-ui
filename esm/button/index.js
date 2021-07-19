import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

var Button = function Button(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("button", {
    className: "btn"
  }, "\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6\u6309\u94AE", text);
};

Button.prototype = {
  text: PropTypes.any
};
export default Button;