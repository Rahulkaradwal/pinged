import { prisma } from "@/app/utils/connect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Info from "./ui/Info";
import FollowButton from "./ui/FollowButton";
import BlockButton from "./ui/BlockButton";

async function UserInformation({ userId }: { userId: string }) {
  if (!userId) return null;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {user?.name + " " + user?.surname}
          </span>
          <span className="text-sm">{user?.username}</span>
        </div>
        <p>{user?.description} </p>

        {user?.city && (
          <Info icon="/map.png">
            Living in <strong>{user?.city}</strong>
          </Info>
        )}

        {user?.school && (
          <Info icon="/school.png">
            Went to <strong>{user?.school}</strong>
          </Info>
        )}

        {user?.work && (
          <Info icon="/work.png">
            Works at <strong>{user?.work}</strong>
          </Info>
        )}

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href={user?.website ? user?.website : "#"}
              className="text-blue-500 font-medium"
            >
              {user?.username}
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span className="text-xs">
              Joined {user?.createdAt.toString().slice(4, 15)}
            </span>
          </div>
        </div>
        <FollowButton />
        <BlockButton />
      </div>
    </div>
  );
}

export default UserInformation;
