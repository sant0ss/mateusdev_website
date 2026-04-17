import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const Button = ({ onClick, text, classCss, path }) => {
  return (
    <Link onClick={onClick} className={classCss} to={path}>
      {text}
    </Link>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  classCss: PropTypes.string,
  path: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: undefined,
  classCss: '',
};

export default Button;
