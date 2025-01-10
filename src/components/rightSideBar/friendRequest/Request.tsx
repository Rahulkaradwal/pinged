import UserNameAndPhoto from "@/components/ui/UserNameAndPhoto";
import Image from "next/image";
import React from "react";

function Request() {
  return (
    <div className="flex justify-between  items-center">
      <UserNameAndPhoto />
      <div className="flex items-center gap-4">
        <button className="text-sm ">
          <Image src="/accept.png" alt="logo" width={16} height={16} />
        </button>
        <button className="text-sm ">
          <Image src="/reject.png" alt="logo" width={16} height={16} />
        </button>
      </div>
    </div>
  );
}

export default Request;
