/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:48:37
 */
import { signInSuccess, signInFailure } from './userActions';

import userReducer, { INITIAL_STATE } from './userReducer';

test('returns initial state when no action is passed', () => {
  const newState = userReducer(undefined, {});
  expect(newState).toEqual(INITIAL_STATE);
});

test('returns expected state when `SIGN_IN_SUCCESS` is passed', () => {
  const response = {
    user: {
      email: 'test@test.com',
      username: 'test'
    },
    token: 'token'
  };
  const newState = userReducer(undefined, signInSuccess(response));
  expect(newState).toEqual({
    currentUser: response.user,
    error: false,
    token: response.token
  });
});

test('returns expected state when `SIGN_IN_FAILURE` is passed', () => {
  const error = 'Invalid email or password';
  const newState = userReducer(undefined, signInFailure(error));
  expect(newState).toEqual({ currentUser: null, error, token: null });
});
