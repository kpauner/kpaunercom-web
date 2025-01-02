"use client";

import React from "react";
import useGetPosts from "../hooks/use-get-posts";

export default function PostsList() {
  const { data: posts } = useGetPosts();
  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
