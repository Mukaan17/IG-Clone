/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:48:11
 */
import socketTypes from './socketTypes';

const INTIAL_STATE = {
  socket: null,
};

const socketReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case socketTypes.CONNECT: {
      return {
        ...state,
        socket: action.payload,
      };
    }
    case socketTypes.DISCONNECT: {
      state.socket && state.socket.disconnect();
      return INTIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default socketReducer;
