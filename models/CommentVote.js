/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:43
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentVoteSchema = new Schema({
  comment: {
    type: Schema.ObjectId,
    ref: 'Comment'
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

const commentVoteModel = mongoose.model('CommentVote', CommentVoteSchema);
module.exports = commentVoteModel;
