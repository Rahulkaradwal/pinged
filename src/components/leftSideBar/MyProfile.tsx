import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/app/utils/connect";

const MyProfile = async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={user?.cover as string}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user?.avatar as string}
          alt=""
          width={30}
          height={30}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">{user?.username}</span>
        <div className="flex items-center gap-4">
          <div className="">
            <Image
              src={user?.avatar as string}
              alt="image"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>
          <span className="text-sm text-gray-500">
            {user?._count.followers} Followers
          </span>
        </div>
        <Link
          href={`/profile/${userId}`}
          className="bg-blue-500 text-white text-xs p-2 rounded-md"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
