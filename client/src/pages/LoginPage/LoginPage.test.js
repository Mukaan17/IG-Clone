/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:47:15
 */
import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from './LoginPage';

import { findByTestAttribute, storeFactory } from '../../utils/test/testUtils';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

/**
 * Factory function that returns a wrapped component
 * @function setup
 * @returns {ShallowWrapper}
 */
export const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<LoginPage store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, 'page-login');
    expect(component.exists()).toBeTruthy();
  });
});
