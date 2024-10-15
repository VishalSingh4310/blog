"use client";
import { useComments } from "context/commentContext";
import { useState } from "react";

const CommentForm = ({ postId }: { postId: number }) => {
  const { addComment } = useComments();
  const [comment, setComment] = useState("");

  const handleSubmit = (e: Record<string, any>) => {
    e.preventDefault();
    addComment(postId, comment);
    setComment(""); // Clear the input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-4 block">
        <textarea
          className="w-full bg-gray-100 p-4 py-2 rounded-md resize min-h-[100px]"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          required
        />
        <button
          type="submit"
          className="mt-2 ml-auto flex bg-black text-white p-2 px-4 text-sm rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
