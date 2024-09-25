import React from 'react';

import { Comment } from '../types/dto';
import styles from '../styles/CommentItem.module.scss';

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.header}>
          <span className={styles.username}>{comment.user.name}</span>
          <span className={styles.created}>
            {new Date(comment.created).toLocaleDateString()}
          </span>
        </div>
        <div className={styles.content}>
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
