"use client";
import Link from "next/link";
import React from "react";

function HamburgerButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:hidden cursor-pointer">
      <div className="flex flex-col gap-1" onClick={() => setOpen(!open)}>
        <div
          className={`w-6 rounded-md h-1 ease-out duration-300 bg-blue-500 ${
            open ? "rotate-45 translate-y-2" : ""
          } `}
        ></div>
        <div
          className={`w-6 rounded-md ease-out duration-300 h-1 bg-blue-500  ${
            open ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 rounded-md h-1 ease-out duration-300 bg-blue-500 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      {open && (
        <div className="absolute  left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
}

export default HamburgerButton;
