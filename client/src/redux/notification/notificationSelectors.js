/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:48:04
 */
import { createSelector } from 'reselect';

const selectNotificationsObject = (state) => state.notifications;

export const selectNotifications = createSelector(
  [selectNotificationsObject],
  (notifications) => notifications.notifications
);

export const selectNotificationState = createSelector(
  [selectNotificationsObject],
  (notifications) => notifications
);
