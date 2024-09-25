import { useState, useEffect } from 'react';
import CommentAPI from '../apis/commentAPI';
import { Comment, Meta } from '../types/dto';

export default function useComment(feedUuid: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      if (isLoading) {
        return;
      }

      setIsLoading(true);

      const response = await CommentAPI.getComments(
        feedUuid,
        meta?.next_page || 1
      );

      setComments([...comments, ...response.data]);
      setMeta(response.meta);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    comments,
    hasMore: (meta?.cur_page ?? 0) < (meta?.page_num ?? 0),
    fetchMore: getComments,
  };
}
