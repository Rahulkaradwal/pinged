import { prisma } from "@/app/utils/connect";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

async function ProfileCard() {
  const { userId } = await auth();
  if (!userId) return null;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });
  return (
    <div className="flex flex-col gap-20 relative">
      <div className="w-full relative h-64 ">
        <Image
          src={user?.cover as string}
          alt="logo"
          fill
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <div className=" flex flex-col ">
        <div className="flex flex-col gap-4  items-center ">
          <p className="text-2xl font-semibold">
            {user?.name + " " + user?.surname}
          </p>
          <div className="flex gap-10  ">
            <div className="flex flex-col  items-center">
              <p>{user?._count?.posts}</p>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center">
              <p>{user?._count?.followers}</p>
              <p>Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <p>{user?._count?.followings}</p>
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-32 w-32 left-0 right-0 m-auto top-48 rounded-full border-4 border-white">
        <Image
          src={user?.avatar as string}
          alt="logo"
          fill
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
