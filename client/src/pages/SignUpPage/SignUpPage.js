/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:47:35
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/userSelectors';

import SignUpCard from '../../components/SignUpCard/SignUpCard';

const SignUpPage = ({ currentUser }) => {
  const history = useHistory();
  useEffect(() => {
    if (currentUser) history.push('/');
  }, [currentUser, history]);
  return (
    <main className="sign-up-page">
      <SignUpCard />
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SignUpPage);
