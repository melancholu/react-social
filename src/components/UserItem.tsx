import React from 'react';

import { User } from '../types/dto';
import styles from '../styles/UserItem.module.scss';

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const created = user.created
    ? new Date(user.created).toLocaleDateString()
    : new Date().toLocaleDateString();

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.header}>
          <span className={styles.username}>{user.name}</span>
          <span className={styles.created}>{created}</span>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
