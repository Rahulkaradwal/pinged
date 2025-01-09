import Image from "next/image";
import Link from "next/link";
import React from "react";

const linkStyle = " flex items-center cursor-pointer gap-2 ";

function Features() {
  return (
    <div className="hidden md:flex w-[50%]  gap-6">
      <div className="flex  gap-6">
        <Link className={linkStyle} href="/">
          <Image src="/home.png" alt="logo" width={16} height={16} />
          <p className="text-sm text-gray-600">Home</p>
        </Link>
        <Link className={linkStyle} href="/">
          <Image src="/friends.png" alt="logo" width={16} height={16} />
          <p className="text-sm text-gray-600">Friends</p>
        </Link>
        <Link className={linkStyle} href="/">
          <Image src="/stories.png" alt="logo" width={16} height={16} />
          <p className="text-sm text-gray-600">Stories</p>
        </Link>
      </div>
      <div className=" hidden gap-6 rounded-lg bg-gray-100 w-fit p-2 lg:flex justify-between items-center">
        <input
          placeholder="Search.."
          className="outline-none bg-transparent w-full"
        />
        <Image src="/search.png" alt="logo" width={16} height={16} />
      </div>
    </div>
  );
}

export default Features;
