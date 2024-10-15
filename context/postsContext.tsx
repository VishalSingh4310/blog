"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { Post } from "types/post.type";

// Create a PostContext
const PostContext = createContext<
  | {
      posts: Post[];
      addPosts: (post: Post[]) => void;
    }
  | undefined
>(undefined); // Used undefined to indicate that the context can be absent

// Create a provider component
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPosts = (post: Post[]) => {
    setPosts(post);
  };

  return (
    <PostContext.Provider value={{ posts, addPosts }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook for using the PostContext
export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostContext");
  }
  return context;
};
