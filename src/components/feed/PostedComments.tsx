import Image from "next/image";
import React from "react";

interface Props {
  comment: any;
}

async function PostedComments({ comment }: Props) {
  return (
    <div className="flex justify-between  gap-4 place-items-start ">
      <div className="w-10 h-10    rounded-full">
        <Image
          src={comment.user?.avatar as string}
          className="w-full rounded-full  h-full object-cover"
          alt="logo"
          width={20}
          height={20}
        />
      </div>
      <div className="flex w-[80%] flex-col">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            {comment.user?.name} {comment.user?.surname}
          </p>
          <p>{comment.desc}</p>
          <div className="flex text-xs items-center gap-6">
            <div className="gap-6  flex items-center  ">
              <Image src={"/like.png"} alt="logo" width={20} height={20} />
              <p>123 likes</p>
            </div>
            <p>Reply</p>
          </div>
        </div>
      </div>
      <button>
        <Image src="/more.png" alt="logo" width={16} height={16} />
      </button>
    </div>
  );
}

export default PostedComments;
