/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:46:38
 */
import React from 'react';

import Avatar from '../Avatar/Avatar';

const UnfollowPrompt = ({ avatar, username }) => (
  <div className="unfollow-prompt">
    <Avatar style={{ width: '10rem', height: '10rem' }} imageSrc={avatar} />
    <p
      style={{ marginTop: '3rem' }}
      className="heading-4"
    >{`Unfollow @${username}?`}</p>
  </div>
);

export default UnfollowPrompt;
