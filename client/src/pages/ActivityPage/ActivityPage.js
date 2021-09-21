/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-21 11:45:12
 */
import React, { Fragment, useEffect } from 'react';

import MobileHeader from '../../components/Header/MobileHeader/MobileHeader';
import NotificationFeed from '../../components/Notification/NotificationFeed/NotificationFeed';

const ActivityPage = () => {
  useEffect(() => {
    document.title = 'FakeGram';
  }, []);

  return (
    <Fragment>
      <MobileHeader>
        <div></div>
        <h3 className="heading-3">Activity</h3>
        <div></div>
      </MobileHeader>
      <main className="activity-page grid">
        <ul className="activity-page__notifications">
          <NotificationFeed />
        </ul>
      </main>
    </Fragment>
  );
};

export default ActivityPage;
