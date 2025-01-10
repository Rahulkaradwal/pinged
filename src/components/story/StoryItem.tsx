import Image from "next/image";
import React from "react";

function StoryItem() {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-2">
      <div className="w-20 h-20 border-2 border-blue-400 relative rounded-full">
        <Image
          className="w-full rounded-full  h-full object-cover"
          src="https://images.pexels.com/photos/28271342/pexels-photo-28271342/free-photo-of-a-beach-with-rocks-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          fill
        />
      </div>
      <p className="text-xs font-semibold ">Your Story</p>
    </div>
  );
}

export default StoryItem;
