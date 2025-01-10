import Image from "next/image";
import React from "react";

function PostComments() {
  return (
    <div className="flex justify-between  gap-4 place-items-start ">
      <div className="w-10 h-10    rounded-full">
        <Image
          className="w-full rounded-full  h-full object-cover"
          src="https://images.pexels.com/photos/28271342/pexels-photo-28271342/free-photo-of-a-beach-with-rocks-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          width={20}
          height={20}
        />
      </div>
      <div className="flex w-[80%] flex-col">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Rahul Karadwal</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            pariatur sint. Ipsum architecto consequatur eveniet dignissimos
            illo, optio iusto quam inventore, sed, earum atque cum assumenda
            aut! At, sunt doloribus?
          </p>
          <div className="flex text-xs items-center gap-6">
            <div className="gap-6  flex items-center  ">
              <Image src={"/like.png"} alt="logo" width={20} height={20} />
              <p>123 likes</p>
            </div>
            <p>Reply</p>
          </div>
        </div>
      </div>
      <button>
        <Image src="/more.png" alt="logo" width={16} height={16} />
      </button>
    </div>
  );
}

export default PostComments;
