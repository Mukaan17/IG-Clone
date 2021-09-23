/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:40:02
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';

const Icon = ({ onClick, className, icon, style }) => {
  const iconClassNames = classNames({
    icon: true,
    [className]: className,
  });

  return (
    <animated.div style={style} onClick={onClick} className={iconClassNames}>
      <ion-icon size="small" name={icon}></ion-icon>
    </animated.div>
  );
};

Icon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default Icon;
