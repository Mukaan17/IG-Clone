/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:41:11
 */
import React from 'react';
import classNames from 'classnames';

const Card = ({ className, style, children }) => {
  const cardClassNames = classNames({
    card: true,
    [className]: className,
  });

  return (
    <div className={cardClassNames} style={style}>
      {children}
    </div>
  );
};

export default Card;
