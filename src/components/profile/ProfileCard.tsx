import Image from "next/image";
import React from "react";

function ProfileCard() {
  return (
    <div className="flex flex-col gap-20 relative">
      <div className="w-full relative h-64 ">
        <Image
          src="https://images.pexels.com/photos/14557814/pexels-photo-14557814.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="logo"
          fill
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <div className=" flex flex-col ">
        <div className="flex flex-col gap-4  items-center ">
          <p className="text-2xl font-semibold">Rahul Karadwal</p>
          <div className="flex gap-10  ">
            <div className="flex flex-col  items-center">
              <p>123</p>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center">
              <p>500</p>
              <p>Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <p>500</p>
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-32 w-32 left-0 right-0 m-auto top-48 rounded-full border-4 border-white">
        <Image
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          fill
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProfileCard;