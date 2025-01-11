"use server";
import Image from "next/image";
import React from "react";

import { auth } from "@clerk/nextjs/server";
import Button from "./reusableUI/Button";
import { revalidatePath } from "next/cache";

async function AddPost() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  async function addPost(formData: FormData) {
    "use server";
    const desc = formData.get("desc");

    // const post = await prisma.post.create({
    //   data: {
    //     desc: desc as string,
    //     userId: userId as string,
    //   },
    // });
    // revalidatePath("/");
    // return post;
    console.log(desc);
  }

  // const user = await prisma.user.create({
  //   data: {
  //     email: 'elsa@prisma.io',
  //     name: 'Elsa Prisma',
  //   },
  // })
  return (
    <form
      action={addPost}
      className="w-full p-4 mt-6 bg-white h-28 flex rounded-lg shadow-md  justify-between gap-4"
    >
      <div className="w-12 h-12  ">
        <Image
          className="w-full rounded-full  flex-1 h-full object-cover"
          src="https://images.pexels.com/photos/28271342/pexels-photo-28271342/free-photo-of-a-beach-with-rocks-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          width={20}
          height={20}
        />
      </div>
      <div className="flex flex-col w-[80%] justify-center gap-3">
        <textarea
          className="outline-none bg-gray-100 p-2 rounded-md"
          placeholder="What's on your mind?"
          name="desc"
        />
        <div className="flex gap-4">
          <Button text="Photo" image="/addimage.png" />
          <Button text="Video" image="/addvideo.png" />
          <Button text="Event" image="/addevent.png" />
          <Button text="Poll" image="/poll.png" />
        </div>
      </div>
      <button className=" ">
        <Image
          src="/emoji.png"
          alt="logo"
          className="object-cover"
          width={20}
          height={20}
        />
      </button>
    </form>
  );
}

export default AddPost;
