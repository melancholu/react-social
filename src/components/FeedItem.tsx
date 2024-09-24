import { Feed } from '../types/dto';
import styles from '../styles/FeedItem.module.scss';

interface FeedItemProps {
  feed: Feed;
}

const FeedItem: React.FC<FeedItemProps> = ({ feed }) => {
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

export default FeedItem;
