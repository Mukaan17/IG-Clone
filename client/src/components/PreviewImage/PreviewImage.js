/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:45:05
 */
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

const PreviewImage = ({ onClick, image, likes, comments, filter }) => (
  <figure onClick={onClick} key={image} className="preview-image">
    <img src={image} alt="User post" style={{ filter }} />
    <div className="preview-image__overlay">
      <span className="preview-image__content">
        {likes > 0 && (
          <div className="preview-image__icon">
            <Icon icon="heart" className="icon--white" />
            <span>{likes}</span>
          </div>
        )}
        <div className="preview-image__icon">
          <Icon icon="chatbubbles" className="icon--white" />
          <span>{comments}</span>
        </div>
      </span>
    </div>
  </figure>
);

PreviewImage.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default PreviewImage;
