/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-21 11:39:22
 */
import React from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const ViewOnGithubButton = () => (
  <a
    style={{ textDecoration: 'none' }}
    href="https://github.com/Mukaan17/IG-Clone"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
      inverted
    >
      <Icon style={{ marginRight: '1rem' }} icon="logo-github" />
      View on GitHub
    </Button>
  </a>
);

export default ViewOnGithubButton;
