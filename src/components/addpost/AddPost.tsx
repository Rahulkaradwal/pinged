import Image from "next/image";
import React from "react";

function AddPost() {
  return (
    <div className="w-full p-4 mt-6 bg-white h-28 flex rounded-md shadow-md  justify-between gap-4">
      <div className="w-12 h-12  ">
        <Image
          className="w-full rounded-full  flex-1 h-full object-cover"
          src="https://images.pexels.com/photos/28271342/pexels-photo-28271342/free-photo-of-a-beach-with-rocks-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          width={20}
          height={20}
        />
      </div>
      <div className="flex flex-col w-[80%] justify-center gap-3">
        <textarea
          className="outline-none bg-gray-100 p-2 rounded-md"
          placeholder="What's on your mind?"
        />
        <div className="flex gap-4">
          <button className="flex gap-2">
            <Image src="/addimage.png" alt="logo" width={20} height={20} />
            <p className="text-sm ">Photo</p>
          </button>
          <button className="flex gap-2">
            <Image src="/addvideo.png" alt="logo" width={20} height={20} />
            <p className="text-sm ">Video</p>
          </button>
          <button className="flex gap-2">
            <Image src="/addevent.png" alt="logo" width={20} height={20} />
            <p className="text-sm ">Event</p>
          </button>
          <button className="flex gap-2">
            <Image src="/poll.png" alt="logo" width={20} height={20} />
            <p className="text-sm ">Poll</p>
          </button>
        </div>
      </div>
      <button className=" ">
        <Image
          src="/emoji.png"
          alt="logo"
          className="object-cover"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}

export default AddPost;
