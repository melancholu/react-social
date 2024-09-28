import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import useComment from '../hooks/useComment';
import ActionButton from '../components/ActionButton';
import CommentList from '../components/CommentList';
import TextInput from '../components/TextInput';
import styles from '../styles/FeedDetail.module.scss';

const FeedDetailPage: React.FC = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const feed = location.state.feed;
  const { createComment } = useComment(feed.uuid);

  useEffect(() => {
    if (!location.state || !location.state.feed) {
      navigate(-1);
    }
  }, [location, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.header}>
          <span className={styles.username}>{feed.user.name}</span>
          <span className={styles.created}>
            {new Date(feed.created).toLocaleDateString()}
          </span>
        </div>
        <div className={styles.content}>
          <p>{feed.content}</p>
        </div>
      </div>
      <div className={styles.create}>
        <TextInput
          name="content"
          placeholder="content"
          _onChange={(value) => setContent(value)}
        />
        <ActionButton onClick={() => createComment(content)} text="reply" />
      </div>
      <div className={styles.comment}>
        <CommentList feedUuid={feed.uuid} />
      </div>
    </div>
  );
};

export default FeedDetailPage;
