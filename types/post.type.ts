export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface PostComments {
  postId: string | number;
  comments: Comment[];
}
export interface Comment {
  text: string;
  date: string;
}
