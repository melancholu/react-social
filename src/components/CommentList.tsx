import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import useComment from '../hooks/useComment';
import CommentItem from './CommentItem';

interface CommentListProps {
  feedUuid: string;
}

const CommentList: React.FC<CommentListProps> = ({ feedUuid }) => {
  const { comments, hasMore, fetchMore } = useComment(feedUuid);

  return (
    <InfiniteScroll
      dataLength={comments.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {comments.map((item) => (
        <CommentItem key={item.uuid} comment={item} />
      ))}
    </InfiniteScroll>
  );
};

export default CommentList;

export {};
