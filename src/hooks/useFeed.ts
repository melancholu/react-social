import { useState, useEffect } from 'react';
import FeedAPI from '../apis/feedAPI';
import { Feed, Meta } from '../types/dto';

export default function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async () => {
    try {
      if (isLoading) {
        return;
      }

      setIsLoading(true);

      const response = await FeedAPI.getFeeds(meta?.next_page || 1);

      setFeeds([...feeds, ...response.data]);
      setMeta(response.meta);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    feeds,
    hasMore: (meta?.cur_page ?? 0) < (meta?.page_num ?? 0),
    fetchMore: getFeeds,
  };
}
