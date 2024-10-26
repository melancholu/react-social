import FeedAPI from '../apis/feedAPI';
import { Feed } from '../types/dto';

export function useLike() {
  const like = async (feed: Feed) => {
    try {
      await FeedAPI.like(feed);

      return {
        liked: !feed.liked,
        likes: (feed.likes ? feed.likes : 0) + (feed.liked ? -1 : 1),
      };
    } catch (error) {
      console.log(error);
    }
  };

  return {
    like,
  };
}
