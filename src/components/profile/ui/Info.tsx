import Image from "next/image";
import React from "react";

interface InfoProps {
  icon: string;
  children: React.ReactNode;
}

function Info({ icon, children }: InfoProps) {
  return (
    <div className="flex items-center gap-2 ">
      <Image src={icon} alt="" width={16} height={16} />
      <span>{children}</span>
    </div>
  );
}

export default Info;
