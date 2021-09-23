/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:39:56
 */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { showModal } from '../../redux/modal/modalActions';
import { signOut } from '../../redux/user/userActions';

import Icon from '../Icon/Icon';

const SettingsButton = ({ showModal, signOut }) => {
  const history = useHistory();
  return (
    <Icon
      icon="settings-outline"
      style={{ cursor: 'pointer' }}
      onClick={() => {
        showModal(
          {
            options: [
              {
                text: 'Change Password',
                onClick: () => history.push('/settings/password'),
              },
              {
                text: 'Log Out',
                onClick: () => {
                  signOut();
                  history.push('/');
                },
              },
            ],
          },
          'OptionsDialog/OptionsDialog'
        );
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (props, component) => dispatch(showModal(props, component)),
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SettingsButton);
