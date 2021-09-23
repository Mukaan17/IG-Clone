/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:42:45
 */
import React from 'react';

const Divider = ({ children }) => (
  <h4
    className={`heading-4 color-grey ${
      children ? 'divider--split' : 'divider'
    }`}
  >
    {children}
  </h4>
);

export default Divider;
