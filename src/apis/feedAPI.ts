import base from './baseAPI';
import { Pagination, Feed } from '../types/dto';

const FeedAPI = {
  async getFeeds(page: number): Promise<Pagination<Feed>> {
    const params = new URLSearchParams();
    params.append('page', page.toString());

    const response = await base.get('/feed', {
      params,
    });

    return response.data;
  },
  async like(feed: Feed): Promise<void> {
    const response = await base.post('/feed/like', feed);

    return response.data;
  },
};

export default FeedAPI;
