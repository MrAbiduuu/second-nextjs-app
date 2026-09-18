import React from "react";

const Post = ({ post }) => {
  return (
    <div className="border border-gray-300 p-4 rounded mb-4">
      <h2 className="font-semibold text-2xl">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
