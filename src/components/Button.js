import React from 'react';
import PropTypes from 'prop-types';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12 mx-4`,
  xl: `py-5 px-16 text-lg`,
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: '',
  size: sizes.default,
};

export default Button;
