"use server";
import React from "react";
import UserPostInfo from "./UserPostInfo";
import AddComment from "./AddComment";
import PostedComments from "./PostedComments";
import { Comment } from "@prisma/client";

async function Post({ post }: any) {
  return (
    <div className=" flex flex-col gap-6 border-b border-gray-200 py-4 ">
      <UserPostInfo post={post} />
      <AddComment />
      {post.comments.length !== 0 &&
        post.comments.map((comment: Comment) => (
          <PostedComments key={comment.id} comment={comment} />
        ))}
    </div>
  );
}

export default Post;
