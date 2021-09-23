/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:47:17
 */
import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import NewPost from '../../components/NewPost/NewPost';

const NewPostPage = ({ location }) => {
  const history = useHistory();
  return location.state && location.state.file ? (
    <NewPost file={location.state.file} hide={() => history.push('/')} />
  ) : (
    <Redirect to="/" />
  );
};

export default NewPostPage;
