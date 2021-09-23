/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:48:07
 */
import socketTypes from './socketTypes';
import { connect } from '../../services/socketService';
import { addNotification } from '../notification/notificationActions';
import { addPost, removePost } from '../feed/feedActions';

export const connectSocket = () => (dispatch) => {
  const socket = connect();
  dispatch({ type: socketTypes.CONNECT, payload: socket });

  socket.on('newNotification', (data) => {
    dispatch(addNotification(data));
  });

  socket.on('newPost', (data) => {
    dispatch(addPost(data));
  });

  socket.on('deletePost', (data) => {
    dispatch(removePost(data));
  });
};

export const disconnectSocket = () => ({
  type: socketTypes.DISCONNECT,
});
