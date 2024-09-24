import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import useFeed from '../hooks/useFeed';
import FeedItem from './FeedItem';

const FeedList: React.FC = () => {
  const { feeds, hasMore, fetchMore } = useFeed();

  return (
    <InfiniteScroll
      dataLength={feeds.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {feeds.map((item) => (
        <FeedItem key={item.uuid} feed={item} />
      ))}
    </InfiniteScroll>
  );
};

export default FeedList;

export {};
