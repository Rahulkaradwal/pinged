import Image from "next/image";
import React from "react";

interface ButtonProps {
  text: string;
  image: string;
}

function Button({ text, image }: ButtonProps) {
  return (
    <button className="flex gap-2">
      <Image src={image} alt="logo" width={20} height={20} />
      <p className="text-sm ">{text}</p>
    </button>
  );
}

export default Button;
