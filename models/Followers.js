/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:44
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowersSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  followers: [
    {
      user: {
        type: Schema.ObjectId,
        ref: 'User'
      }
    }
  ]
});

const followersModel = mongoose.model('Followers', FollowersSchema);
module.exports = followersModel;
