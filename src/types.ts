/**
 * DummyJson Types
 *
 * @see https://dummyjson.com/docs/posts
 */
export type PostResponse = {
  posts: Post[];
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};
