/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:47:42
 */
import alertTypes from './alertTypes';

const INITIAL_STATE = {
  text: '',
  onClick: null,
  showAlert: false,
  timeoutId: null,
};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case alertTypes.SHOW_ALERT: {
      const { text, onClick } = action.payload;
      return {
        ...state,
        text,
        onClick,
        showAlert: true,
      };
    }
    case alertTypes.HIDE_ALERT: {
      return { ...state, text: '', onClick: null, showAlert: false };
    }
    case alertTypes.SET_ALERT_TIMEOUT_ID: {
      return {
        ...state,
        timeoutId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default alertReducer;
