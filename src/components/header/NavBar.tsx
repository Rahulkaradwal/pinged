import React from "react";
import Logo from "./Logo";
import MenuButtons from "./MenuButtons";
import Features from "./Features";

function NavBar() {
  return (
    <div className="h-24 py-4 px-4 md:px-9 lg:px-32  shadow-sm flex justify-between items-center  ">
      <Logo />
      <Features />

      <MenuButtons />
    </div>
  );
}

export default NavBar;
