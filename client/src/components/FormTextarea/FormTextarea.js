/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:43:21
 */
import React from 'react';

const FormTextarea = ({ children, fieldProps, ...additionalProps }) => (
  <textarea
    className="form-group__textarea"
    {...fieldProps}
    {...additionalProps}
  >
    {children}
  </textarea>
);

export default FormTextarea;
