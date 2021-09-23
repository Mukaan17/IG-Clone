/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:54
 */
const express = require('express');
const authRouter = express.Router();

const {
  loginAuthentication,
  register,
  requireAuth,
  changePassword,
  githubLoginAuthentication,
} = require('../controllers/authController');

authRouter.post('/login/github', githubLoginAuthentication);
authRouter.post('/login', loginAuthentication);
authRouter.post('/register', register);

authRouter.put('/password', requireAuth, changePassword);

module.exports = authRouter;
