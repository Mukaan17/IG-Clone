/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:42
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentReplyVoteSchema = new Schema({
  comment: {
    type: Schema.ObjectId,
    ref: 'CommentReply'
  },
  votes: [
    {
      author: {
        type: Schema.ObjectId,
        ref: 'User'
      }
    }
  ]
});

const commentReplyVoteModel = mongoose.model(
  'CommentReplyVote',
  CommentReplyVoteSchema
);
module.exports = commentReplyVoteModel;
