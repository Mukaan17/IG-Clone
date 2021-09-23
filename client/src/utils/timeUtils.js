/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:53:29
 */
import { formatDistanceStrict, format } from 'date-fns';

export const formatDateDistance = (endDate) => {
  const format = formatDistanceStrict(new Date(), new Date(endDate));
  const duration = format.split(' ');
  duration[1] = duration[1].substring(0, 1);
  if (duration[1] === 's') {
    return 'Just now';
  }
  return duration.join(' ');
};

export const formatDate = (date) => {
  date = new Date(date);
  const formattedDate = format(date, 'MMMM d');
  return formattedDate;
};
