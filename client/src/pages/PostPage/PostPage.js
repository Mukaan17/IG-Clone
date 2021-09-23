/**
 * @Author: Mukhil Sundararaj
 * @Date:   2021-09-21 10:16:54
 * @Last Modified by:   Mukhil Sundararaj
 * @Last Modified time: 2021-09-23 08:47:22
 */
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import PostDialog from '../../components/PostDialog/PostDialog';
import MobileHeader from '../../components/Header/MobileHeader/MobileHeader';

const PostPage = () => {
  const { postId } = useParams();

  return (
    <Fragment>
      <MobileHeader backArrow>
        <h3 className="heading-3">Post</h3>
        {/* Empty element to keep grid happy */}
        <div></div>
      </MobileHeader>
      <main className="post-page grid">
        <PostDialog className="border-grey-2" postId={postId} />
      </main>
    </Fragment>
  );
};

export default PostPage;
