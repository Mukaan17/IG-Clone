/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:56
 */
const express = require('express');
const authRouter = require('./auth');
const userRouter = require('./user');
const postRouter = require('./post');
const commentRouter = require('./comment');
const notificationRouter = require('./notification');
const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/post', postRouter);
apiRouter.use('/comment', commentRouter);
apiRouter.use('/notification', notificationRouter);

module.exports = apiRouter;
