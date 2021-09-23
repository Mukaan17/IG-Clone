/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:46:26
 */
import React from 'react';
import PropTypes from 'prop-types';

const SkeletonLoader = ({ style, animated }) => {
  return animated ? (
    <div style={style} className="skeleton-loader--animated"></div>
  ) : (
    <div style={style} className="skeleton-loader"></div>
  );
};

SkeletonLoader.propTypes = {
  style: PropTypes.object,
};

export default SkeletonLoader;
