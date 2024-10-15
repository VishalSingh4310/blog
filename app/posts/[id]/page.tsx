"use client";
import CommentForm from "@components//CommentForm";
import CommentCard from "@components/Comment";
import { useComments } from "context/commentContext";
import { usePosts } from "context/postsContext";
import { useParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { Post } from "types/post.type";

const PostDetail: FC = () => {
  const { posts } = usePosts();
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState<Post | null>(null);
  const { comments } = useComments();

  useEffect(() => {
    if (id) {
      const postFound = posts.find((p) => p.id === parseInt(String(id)));
      setPost(postFound || null);
    }
  }, [id]);
  const postComments = comments.find((comm) => comm.postId === post?.id);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <p>{post.body}</p>
      {/* Placeholder for comments */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <CommentForm postId={post.id} />
      </div>
      <div>
        {(postComments?.comments || []).map((comment, index) => (
          <CommentCard
            key={index}
            id={index}
            comment={comment.text}
            date={comment.date}
          />
        ))}
      </div>
    </div>
  );
};
export default PostDetail;
