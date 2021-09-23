/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:48:42
 */
import { combineReducers } from 'redux';

import userReducer from './user/userReducer.js';
import modalReducer from './modal/modalReducer';
import alertReducer from './alert/alertReducer';
import socketReducer from './socket/socketReducer';
import notificationReducer from './notification/notificationReducer';
import feedReducer from './feed/feedReducer';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  alert: alertReducer,
  socket: socketReducer,
  notifications: notificationReducer,
  feed: feedReducer,
});

export default rootReducer;
