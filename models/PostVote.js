/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:47
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostVoteSchema = new Schema({
  post: {
    type: Schema.ObjectId,
    ref: 'Post'
  },
  votes: [{ author: { type: Schema.ObjectId, ref: 'User' } }]
});

const postVoteModel = mongoose.model('PostVote', PostVoteSchema);

module.exports = postVoteModel;
