/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:45
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowingSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  following: [
    {
      user: {
        type: Schema.ObjectId,
        ref: 'User'
      }
    }
  ]
});

const followingModel = mongoose.model('Following', FollowingSchema);
module.exports = followingModel;
