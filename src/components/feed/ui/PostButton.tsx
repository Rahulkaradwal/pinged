import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
  icon: string;
  name: string;
  handleClick?: () => void;
}

function PostButton({ children, icon, name, handleClick }: Props) {
  return (
    <div className="flex w-fit gap-4  justify-between items-center bg-gray-100 p-2 rounded-xl">
      <Image
        onClick={handleClick}
        src={icon}
        alt="logo"
        width={16}
        height={16}
        className="cursor-pointer "
      />
      {children}
      <p className="hidden md:block">{name}</p>
    </div>
  );
}

export default PostButton;
