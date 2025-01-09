import Image from "next/image";
import Link from "next/link";
import React from "react";
import HamburgerButton from "./HamburgerButton";

function MenuButtons() {
  return (
    <div className=" justify-between   gap-6  flex items-center ">
      <Image src="/people.png" alt="logo" width={20} height={20} />
      <Image src="/messages.png" alt="logo" width={20} height={20} />
      <Image src="/notifications.png" alt="logo" width={20} height={20} />
      <HamburgerButton />
    </div>
  );
}

export default MenuButtons;
