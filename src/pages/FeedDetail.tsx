import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from '../styles/FeedDetail.module.scss';

const FeedDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const feed = location.state.feed;

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
    </div>
  );
};

export default FeedDetailPage;
