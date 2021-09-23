/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:53:14
 */
import axios from 'axios';

/**
 * Retrieves a users notifications
 * @function retrieveNotifications
 * @param {string} authToken A user's auth token
 * @returns {array} Array of notifications
 */
export const retrieveNotifications = async (authToken) => {
  try {
    const response = await axios.get('/api/notification', {
      headers: {
        authorization: authToken,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

/**
 * Reads all the user's notifications
 * @function readNotifications
 * @param {string} authToken A user's auth token
 */
export const readNotifications = async (authToken) => {
  try {
    await axios.put('/api/notification', null, {
      headers: {
        authorization: authToken,
      },
    });
  } catch (err) {
    throw new Error(err.response.data);
  }
};
