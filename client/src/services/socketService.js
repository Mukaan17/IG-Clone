/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:53:16
 */
import io from 'socket.io-client';

export const connect = () => {
  const socket = io({
    query: { token: localStorage.getItem('token') },
  });
  return socket;
};
