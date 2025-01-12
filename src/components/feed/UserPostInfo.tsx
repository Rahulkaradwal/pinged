"use server";
import Image from "next/image";
import React from "react";
import UserNameAndPhoto from "../ui/UserNameAndPhoto";
import ActionButtons from "./ui/ActionButtons";
import { auth } from "@clerk/nextjs/server";

async function UserPostInfo({ post }: any) {
  const { userId } = await auth();
  if (!userId) return;
  return (
    <>
      <div className="flex justify-between  items-center">
        <UserNameAndPhoto
          type="feed"
          name={post.user.name}
          avatar={post.user.avatar}
          surname={post.user.surname}
        />
        <button>
          <Image src="/more.png" alt="logo" width={16} height={16} />
        </button>
      </div>
      <div className="w-full relative h-80 ">
        <Image
          src={
            post.img
              ? post.img
              : "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg"
          }
          alt="logo"
          fill
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <p className="">{post.desc}</p>
      <ActionButtons
        userId={userId}
        postId={post.id}
        likes={post.likes.length}
        comments={post.comments.length}
      />
    </>
  );
}

export default UserPostInfo;
