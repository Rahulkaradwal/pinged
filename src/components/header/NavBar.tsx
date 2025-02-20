import React from "react";
import Logo from "./Logo";
import MenuButtons from "./MenuButtons";
import Features from "./Features";
import { ClerkLoading } from "@clerk/nextjs";

function NavBar() {
  return (
    <nav className="h-24 py-4 px-4  md:px-9 lg:px-16  xl:px-32 gap-4  shadow-sm flex justify-between items-center  ">
      <Logo />
      <Features />

      <MenuButtons />
    </nav>
  );
}

export default NavBar;
