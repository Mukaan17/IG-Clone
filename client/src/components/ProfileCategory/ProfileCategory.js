/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:45:07
 */
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

const ProfileCategory = ({ category, icon }) => (
  <div className="profile-categories">
    <div className="profile-categories__category">
      <Icon icon={icon} />
      <h3 className="font-medium">{category}</h3>
    </div>
  </div>
);

ProfileCategory.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ProfileCategory;
