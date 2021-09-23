/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:41:02
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = ({
  imageSrc = require('../../assets/img/default-avatar.png').default,
  className,
  onClick,
  style,
}) => {
  const avatarClasses = classNames({
    avatar: true,
    [className]: className,
  });

  return (
    <img
      className={avatarClasses}
      onClick={onClick}
      style={style}
      src={imageSrc}
      alt="Avatar"
    />
  );
};

Avatar.propTypes = {
  imageSrc: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
