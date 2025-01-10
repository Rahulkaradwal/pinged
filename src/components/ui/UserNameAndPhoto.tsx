import Image from "next/image";
import React from "react";

function UserNameAndPhoto() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10  relative   rounded-full">
        <Image
          className="w-full rounded-full  h-full object-cover"
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          fill
        />
      </div>
      <p>Rahul Karadwal</p>
    </div>
  );
}

export default UserNameAndPhoto;
