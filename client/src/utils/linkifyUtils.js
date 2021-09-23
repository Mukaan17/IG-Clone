/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:53:28
 */
export const linkifyOptions = {
  formatHref: function (href, type) {
    if (type === 'hashtag') {
      href = '/explore/tags/' + href.substring(1);
    }
    if (type === 'mention') {
      href = '/' + href.substring(1);
    }
    return href;
  },
  className: 'styled-link',
  attributes: {
    target: {
      url: '_blank',
    },
  },
};
