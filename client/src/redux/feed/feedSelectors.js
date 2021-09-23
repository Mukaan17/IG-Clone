/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:47:49
 */
import { createSelector } from 'reselect';

const selectFeed = (state) => state.feed;

export const selectFeedPosts = createSelector(
  [selectFeed],
  (feed) => feed.posts
);

export const selectFeedError = createSelector(
  [selectFeed],
  (feed) => feed.error
);

export const selectFeedFetching = createSelector(
  [selectFeed],
  (feed) => feed.fetching
);

export const selectHasMore = createSelector(
  [selectFeed],
  (feed) => feed.hasMore
);
