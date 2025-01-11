import Image from "next/image";
import React from "react";
import HamburgerButton from "./HamburgerButton";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

function MenuButtons() {
  return (
    <div className=" justify-end  xl:w-[25%]  gap-8  flex items-center ">
      <ClerkLoading>
        <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
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
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-2 text-sm">
            <Image src="/login.png" alt="" width={20} height={20} />
            <Link href="/sign-in">Login/Register</Link>
          </div>
        </SignedOut>
      </ClerkLoaded>

      <UserButton />
      <HamburgerButton />
    </div>
  );
}

export default MenuButtons;
