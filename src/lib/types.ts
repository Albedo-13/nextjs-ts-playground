export type TPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

export type TPosts = {
  posts: TPost[];
};