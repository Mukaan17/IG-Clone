/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:47:41
 */
import alertTypes from './alertTypes';

export const hideAlert = () => ({
  type: alertTypes.HIDE_ALERT,
});

export const showAlert = (text, onClick = null) => (dispatch, getState) => {
  const state = getState();
  clearTimeout(state.alert.timeoutId);
  const timeout = setTimeout(() => {
    dispatch(hideAlert());
    dispatch({ type: alertTypes.SET_ALERT_TIMEOUT_ID, payload: null });
  }, 5000);
  dispatch({ type: alertTypes.SET_ALERT_TIMEOUT_ID, payload: timeout });
  // If there is an alert already present,
  // disable it and allow the animation to finish
  // before toggling the new one
  if (state.alert.showAlert) {
    dispatch(hideAlert());
    setTimeout(() => {
      dispatch({
        type: alertTypes.SHOW_ALERT,
        payload: { text, onClick },
      });
    }, 500);
  } else {
    dispatch({
      type: alertTypes.SHOW_ALERT,
      payload: { text, onClick },
    });
  }
};
