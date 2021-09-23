/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:45:09
 */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Redirect } from 'react-router-dom';

import { selectToken } from '../../redux/user/userSelectors';

const ProtectedRoute = ({ token, children, ...props }) => {
  return (
    <Route {...props}>{token ? children : <Redirect to="/login" />}</Route>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

export default connect(mapStateToProps)(ProtectedRoute);
