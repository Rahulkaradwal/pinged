import Image from "next/image";
import React from "react";

function UserNameAndPhoto() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10    rounded-full">
        <Image
          className="w-full rounded-full  h-full object-cover"
          src="https://images.pexels.com/photos/28271342/pexels-photo-28271342/free-photo-of-a-beach-with-rocks-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          width={20}
          height={20}
        />
      </div>
      <p>Rahul Karadwal</p>
    </div>
  );
}

export default UserNameAndPhoto;
