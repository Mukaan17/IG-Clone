/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:41:06
 */
import React from 'react';
import ClassNames from 'classnames';

const TextButton = ({
  children,
  blue,
  darkBlue,
  bold,
  large,
  medium,
  small,
  ...additionalProps
}) => {
  const textButtonClassNames = ClassNames({
    'text-button': true,
    'heading-3': large,
    'heading-4': medium,
    'heading-5': small,
    'color-blue': blue,
    'color-blue-2': darkBlue,
    'font-bold': bold,
  });
  return (
    <button {...additionalProps} className={textButtonClassNames}>
      {children}
    </button>
  );
};

export default TextButton;
