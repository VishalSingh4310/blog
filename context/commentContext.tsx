"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { PostComments } from "types/post.type";

// Create a CommentContext
const CommentContext = createContext<
  | {
      comments: PostComments[];
      addComment: (postId: number | string, comment: string) => void;
    }
  | undefined
>(undefined); // Used undefined to indicate that the context can be absent

// Create a provider component
export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [comments, setComments] = useState<PostComments[]>([]);

  const addComment = (postId: string | number, text: string) => {
    // Check if the post comments are already exists
    const postCommentIndex = comments.findIndex(
      (comment) => comment.postId === postId
    );
    if (postCommentIndex !== -1) {
      // Update the post's comments
      const updatedComments = comments.map((comm: PostComments, index) =>
        index === postCommentIndex
          ? {
              ...comm,
              comments: [
                ...comm.comments,
                { text, date: new Date().toISOString() },
              ],
            }
          : comm
      );
      setComments(updatedComments);
    } else {
      // Add a new comment if not found
      const newComment = {
        postId,
        comments: [{ text, date: new Date().toISOString() }],
      };
      setComments([...comments, newComment]);
    }
  };

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
};

// Custom hook for using the CommentContext
export const useComments = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useComments must be used within a CommentProvider");
  }
  return context;
};
