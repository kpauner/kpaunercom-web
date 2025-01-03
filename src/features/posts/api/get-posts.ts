import pb from "@/lib/pocketbase";
import { ListResult } from "pocketbase";
import { Post, PostsParams } from "../types/posts.types";

export const getPosts = async ({
  page = 1,
  perPage = 10,
  filter = "isPublished = true",
}: PostsParams = {}): Promise<ListResult<Post>> => {
  return await pb.collection("posts").getList<Post>(page, perPage, {
    filter,
    sort: "-created",
  });
};
