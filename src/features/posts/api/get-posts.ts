import pb from "@/lib/pocketbase";

export const getPosts = async () => {
  const posts = await pb.collection("posts").getList(1, 50);
  return posts;
};
