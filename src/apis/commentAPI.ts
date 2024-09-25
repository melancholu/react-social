import base from './baseAPI';
import { Pagination, Comment } from '../types/dto';

const CommentAPI = {
  async getComments(
    feedUuid: string,
    page: number
  ): Promise<Pagination<Comment>> {
    const params = new URLSearchParams();
    params.append('feed', feedUuid);
    params.append('page', page.toString());

    const response = await base.get('/comment', {
      params,
    });

    return response.data;
  },
};

export default CommentAPI;
