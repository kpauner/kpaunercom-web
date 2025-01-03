import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/features/posts/api/get-posts";
import { QUERY_KEYS } from "@/config/app.config";
import { PostsParams } from "@/features/posts/types/posts.types";

export default function useGetPosts(params?: PostsParams) {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS, params],
    queryFn: () => getPosts(params),
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });
}
