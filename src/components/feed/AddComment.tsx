import { prisma } from "@/app/utils/connect";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

async function AddComment() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      avatar: true,
      name: true,
      surname: true,
    },
  });
  return (
    <div className="flex justify-between  items-center">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8    rounded-full">
          <Image
            className="w-full rounded-full  h-full object-cover"
            src={user?.avatar as string}
            alt="logo"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex w-[90%]   items-center gap-4 bg-gray-200 py-2 px-4 rounded-xl">
        <input
          placeholder="Add a comment"
          className=" w-full bg-transparent outline-none"
        />
        <button>
          <Image src="/emoji.png" alt="logo" width={16} height={16} />
        </button>
      </div>
    </div>
  );
}

export default AddComment;
