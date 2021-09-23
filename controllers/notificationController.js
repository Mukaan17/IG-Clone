/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:54:30
 */
const Notification = require('../models/Notification');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.retrieveNotifications = async (req, res, next) => {
  const user = res.locals.user;

  try {
    const notifications = await Notification.aggregate([
      {
        $match: { receiver: ObjectId(user._id) },
      },
      {
        $sort: { date: -1 },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'sender',
          foreignField: '_id',
          as: 'sender',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'receiver',
          foreignField: '_id',
          as: 'receiver',
        },
      },
      {
        $unwind: '$sender',
      },
      {
        $unwind: '$receiver',
      },
      // Look for the sender's followers
      {
        $lookup: {
          from: 'followers',
          localField: 'sender._id',
          foreignField: 'user',
          as: 'senderFollowers',
        },
      },
      {
        $unwind: '$senderFollowers',
      },
      // Check for the receiver's id in the sender's followers array
      {
        $addFields: {
          isFollowing: {
            $in: ['$receiver._id', '$senderFollowers.followers.user'],
          },
        },
      },
      {
        $project: {
          read: true,
          notificationType: true,
          isFollowing: true,
          date: true,
          notificationData: true,
          'sender.username': true,
          'sender.avatar': true,
          'sender._id': true,
          'receiver._id': true,
        },
      },
    ]);
    return res.send(notifications);
  } catch (err) {
    next(err);
  }
};

module.exports.readNotifications = async (req, res, next) => {
  const user = res.locals.user;

  try {
    await Notification.updateMany({ receiver: user._id }, { read: true });
    return res.send();
  } catch (err) {
    next(err);
  }
};
