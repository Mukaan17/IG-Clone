/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:47:56
 */
import modalTypes from './modalTypes';

const INITIAL_STATE = {
  modals: []
  // show: false,
  // props: undefined,
  // component: undefined
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalTypes.HIDE_MODAL: {
      const modals = state.modals;
      const modifiedModals = modals.filter(
        modal => modal.component !== action.payload
      );
      return { modals: modifiedModals };
    }
    case modalTypes.SHOW_MODAL: {
      const { props, component } = action.payload;
      return { modals: [...state.modals, { props, component }] };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
