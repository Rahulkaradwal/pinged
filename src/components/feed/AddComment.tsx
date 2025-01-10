import Image from "next/image";
import React from "react";

function AddComment() {
  return (
    <div className="flex justify-between  items-center">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8    rounded-full">
          <Image
            className="w-full rounded-full  h-full object-cover"
            src="https://images.pexels.com/photos/28271342/pexels-photo-28271342/free-photo-of-a-beach-with-rocks-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
