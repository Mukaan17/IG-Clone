/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:53:13
 */
import axios from 'axios';

/**
 * Retrieves posts from user's feed
 * @function retrieveFeedPosts
 * @param {string} authToken A user's auth token
 * @param {number} offset The offset of posts to retrieve
 * @returns {array} Array of posts
 */
export const retrieveFeedPosts = async (authToken, offset = 0) => {
  try {
    const response = await axios.get(`/api/post/feed/${offset}`, {
      headers: {
        authorization: authToken,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};
