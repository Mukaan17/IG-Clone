/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:46:18
 */
import React from 'react';

const SettingsForm = ({ onSubmit, children }) => (
  <form className="settings-form" onSubmit={onSubmit}>
    {children}
  </form>
);

export default SettingsForm;
