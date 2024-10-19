import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import useUser from '../hooks/useUser';
import UserItem from './UserItem';

const UserList: React.FC = () => {
  const { users, hasMore, fetchMore } = useUser();

  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {users.map((item) => (
        <UserItem key={item.uuid} user={item} />
      ))}
    </InfiniteScroll>
  );
};

export default UserList;

export {};
