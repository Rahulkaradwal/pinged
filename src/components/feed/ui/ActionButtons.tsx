import React from "react";
import PostButton from "./PostButton";

interface Props {
  likes: number;
  comments: number;
  shares?: number;
}

function ActionButtons({ likes, comments, shares }: Props) {
  return (
    <div className="flex text-sm justify-between">
      {/* Like button */}
      <PostButton icon="/like.png" name="Likes">
        <p>{likes}</p>
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
