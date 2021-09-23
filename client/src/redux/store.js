/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:48:43
 */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
