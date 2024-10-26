import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Like from '../assets/like.svg';
import Unlike from '../assets/unlike.svg';
import { useLike } from '../hooks/useLike';
import styles from '../styles/FeedItem.module.scss';
import { Feed } from '../types/dto';

interface FeedItemProps {
  feed: Feed;
}

const FeedItem: React.FC<FeedItemProps> = ({ feed }) => {
  const created = feed.created
    ? new Date(feed.created).toLocaleDateString()
    : new Date().toLocaleDateString();
  const navigate = useNavigate();
  const { like } = useLike();
  const [liked, setLiked] = useState(feed.liked);
  const [likes, setLikes] = useState(feed.likes);

  const onClickFeed = () => {
    navigate(`/feed/${feed.uuid}`, { state: { feed } });
  };

  const onClickLike = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const updated = await like(feed);

    if (updated) {
      feed.liked = updated.liked;
      feed.likes = updated.likes;

      setLiked(updated.liked);
      setLikes(updated.likes);
    }
  };

  return (
    <div className={styles.container} onClick={onClickFeed}>
      <div className={styles.post}>
        <div className={styles.header}>
          <span className={styles.username}>{feed.user?.name}</span>
          <span className={styles.created}>{created}</span>
        </div>
        <div className={styles.content}>
          <p>{feed.content}</p>
        </div>
        <div className={styles.footer}>
          <button onClick={onClickLike}>
            {liked ? <img src={Like} alt="" /> : <img src={Unlike} alt="" />}
            <span>{likes ?? 0}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
