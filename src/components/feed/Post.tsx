import React from "react";
import UserPostInfo from "./UserPostInfo";
import AddComment from "./AddComment";
import PostComments from "./PostComments";

function Post() {
  return (
    <div className=" flex flex-col gap-6 border-b border-gray-200 py-4 ">
      <UserPostInfo />
      <AddComment />
      <PostComments />
    </div>
  );
}

export default Post;
