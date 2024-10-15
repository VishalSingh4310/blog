"use client";
import { Post } from "types/post.type";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePosts } from "context/postsContext";

export default function Home() {
  const { posts, addPosts } = usePosts();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await response.json();
      addPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-6">Latest Blog Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post: Post) => (
          <li
            key={post.id}
            className="p-6 bg-white shadow-lg rounded-md flex flex-col justify-between"
          >
            <>
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm line-clamp-2">{post.body}</p>
              </div>
              <div>
                <hr className="border-gray-200 my-4" />
                <Link
                  href={`/posts/${post.id}`}
                  className="underline float-right text-sm cursor-pointer"
                >
                  Read more
                </Link>
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}
