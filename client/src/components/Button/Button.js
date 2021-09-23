/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:41:08
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Loader from '../Loader/Loader';

const Button = ({ children, onClick, inverted, style, disabled, loading }) => {
  const buttonClasses = classNames({
    button: true,
    'button--inverted': inverted,
    'button--disabled': disabled,
  });
  return (
    <button
      style={style}
      className={buttonClasses}
      onClick={loading ? () => {} : onClick}
      type={disabled ? 'button' : 'submit'}
    >
      {loading && <Loader />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  inverted: PropTypes.bool,
};

export default Button;
