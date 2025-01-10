import Image from "next/image";
import React from "react";
import UserNameAndPhoto from "../ui/UserNameAndPhoto";

function UserPostInfo() {
  return (
    <>
      <div className="flex justify-between  items-center">
        <UserNameAndPhoto />
        <button>
          <Image src="/more.png" alt="logo" width={16} height={16} />
        </button>
      </div>
      <div className="w-full h-80 ">
        <Image
          src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          width={80}
          height={80}
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro
        aliquam ab ipsum reiciendis magni at reprehenderit beatae blanditiis
        quos provident ullam, iste mollitia perferendis animi odio obcaecati est
        inventore.
      </p>
      <div className="flex text-sm justify-between">
        <div className="flex w-fit gap-4  justify-between items-center bg-gray-100 p-2 rounded-xl">
          <Image src="/like.png" alt="logo" width={16} height={16} />
          <p>123</p>
          <p className="hidden md:block">Likes</p>
        </div>
        <div className="flex w-fit gap-4  justify-between items-center bg-gray-100 p-2 rounded-xl">
          <Image src="/comment.png" alt="logo" width={16} height={16} />
          <p>123</p>
          <p className="hidden md:block">Comments</p>
        </div>
        <div className="flex w-fit gap-4  justify-between items-center bg-gray-100 p-2 rounded-xl">
          <Image src="/share.png" alt="logo" width={16} height={16} />
          <p>123</p>
          <p className="hidden md:block">Shares</p>
        </div>
      </div>
    </>
  );
}

export default UserPostInfo;
