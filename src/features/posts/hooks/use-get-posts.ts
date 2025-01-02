import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/features/posts/api/get-posts";
import { QUERY_KEYS } from "@/config/app.config";

export default function useGetPosts() {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: getPosts,
  });
}
