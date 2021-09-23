/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:48:01
 */
import notificationTypes from './notificationTypes';

import {
  retrieveNotifications,
  readNotifications,
} from '../../services/notificationServices';

export const addNotification = (notification) => ({
  type: notificationTypes.ADD_NOTIFICATION,
  payload: notification,
});

export const fetchNotificationsStart = (authToken) => async (dispatch) => {
  try {
    dispatch({ type: notificationTypes.FETCH_NOTIFICATIONS_START });
    const response = await retrieveNotifications(authToken);
    dispatch({
      type: notificationTypes.FETCH_NOTIFICATIONS_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: notificationTypes.FETCH_NOTIFICATIONS_FAILURE,
      payload: err.message,
    });
  }
};

export const readNotificationsStart = (authToken) => async (dispatch) => {
  try {
    dispatch({ type: notificationTypes.READ_NOTIFICATIONS });
    await readNotifications(authToken);
  } catch (err) {
    console.warn(err.message);
  }
};

export const clearNotifications = () => ({
  type: notificationTypes.CLEAR_NOTIFICATIONS,
});
