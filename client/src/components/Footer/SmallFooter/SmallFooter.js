/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-21 11:43:22
 */
import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../Icon/Icon';

const SmallFooter = () => {
  const links = [
    'About',
    'Help',
    'Press',
    'API',
    'Jobs',
    'Privacy',
    'Terms',
    'Locations',
    'Top Accounts',
    'Hashtags',
    'Language',
  ];
  return (
    <footer className="footer--small color-grey-2 font-bold">
      <div className="footer--small__links">
        {links.map((link, idx) => (
          <Link key={idx} to="/">
            {link}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default SmallFooter;
