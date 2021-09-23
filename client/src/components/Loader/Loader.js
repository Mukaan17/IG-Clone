/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:43:42
 */
import React from 'react';

import { ReactComponent as LoaderSvg } from '../../assets/svg/loader.svg';

const Loader = () => (
  <div className="loader">
    <LoaderSvg className="loader__svg" />
  </div>
);

export default Loader;
