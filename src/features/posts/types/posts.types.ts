import { RecordModel } from "pocketbase";

export type Category = RecordModel & {
  title: string;
};

export type Post = RecordModel & {
  title: string;
  slug: string;
  featuredImage: string;
  excerpt: string;
  content: string;
  categories: string;
  expand: {
    categories: Category[];
  };
  isPublished: boolean;
};

export type PostsParams = {
  page?: number;
  perPage?: number;
  filter?: string;
};
