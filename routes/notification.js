/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:56
 */
const express = require('express');
const notificationRouter = express.Router();

const {
  retrieveNotifications,
  readNotifications,
} = require('../controllers/notificationController');
const { requireAuth } = require('../controllers/authController');

notificationRouter.get('/', requireAuth, retrieveNotifications);

notificationRouter.put('/', requireAuth, readNotifications);

module.exports = notificationRouter;
