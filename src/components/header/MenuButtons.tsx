import Image from "next/image";
import React from "react";
import HamburgerButton from "./HamburgerButton";

function MenuButtons() {
  return (
    <div className=" justify-end  xl:w-[25%]  gap-8  flex items-center ">
      <Image
        src="/people.png"
        alt="logo"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/messages.png"
        alt="logo"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/notifications.png"
        alt="logo"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/notifications.png"
        alt="logo"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <HamburgerButton />
    </div>
  );
}

export default MenuButtons;
