/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:35
 */
module.exports = class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'RequestError';
    this.statusCode = statusCode;
  }
};
