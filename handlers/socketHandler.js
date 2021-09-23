/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:38
 */
module.exports.sendNotification = (req, notification) => {
  const io = req.app.get('socketio');
  io.sockets.in(notification.receiver).emit('newNotification', notification);
};

module.exports.sendPost = (req, post, receiver) => {
  const io = req.app.get('socketio');
  io.sockets.in(receiver).emit('newPost', post);
};

module.exports.deletePost = (req, postId, receiver) => {
  const io = req.app.get('socketio');
  io.sockets.in(receiver).emit('deletePost', postId);
};
