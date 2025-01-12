"use client";
import React, { useState } from "react";
import PostButton from "./PostButton";
import { likePost } from "@/app/actions/likePost";

interface Props {
  likes: number;
  comments: number;
  shares?: number;
  postId?: string;
  userId: string;
}

function ActionButtons({ likes, comments, shares, postId, userId }: Props) {
  const [optimisticLikes, setOptimisticLikes] = useState(likes);

  const handleLike = async () => {
    if (!postId || !userId) {
      console.error("Post ID or User ID is missing");
      return;
    }
    try {
      // Optimistically update likes
      setOptimisticLikes((prevLikes) => prevLikes + 1);

      // Call the server action
      await likePost(parseInt(postId), userId);
    } catch (error) {
      console.error("Failed to like the post:", error);
      // Revert optimistic update on error
      setOptimisticLikes((prevLikes) => prevLikes - 1);
    }
  };

  return (
    <div className="flex text-sm justify-between">
      {/* Like button */}
      <PostButton handleClick={handleLike} icon="/like.png" name="Likes">
        <p>{optimisticLikes}</p>
      </PostButton>

      {/*  Comment button  */}
      <PostButton icon="/comment.png" name="Comments">
        <p>{comments}</p>
      </PostButton>

      {/* Share button */}
      <PostButton icon="/share.png" name="Shares">
        <p>123</p>
      </PostButton>
    </div>
  );
}

export default ActionButtons;
