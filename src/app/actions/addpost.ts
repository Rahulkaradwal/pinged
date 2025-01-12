"use server";

import { prisma } from "@/app/utils/connect";
import { revalidatePath } from "next/cache";
export async function addPost(formData: FormData) {
  const desc = formData.get("desc");
  const userId = formData.get("userId");

  const post = await prisma.post.create({
    data: {
      desc: desc as string,
      userId: userId as string,
    },
  });
  revalidatePath("/");
  return post;
}
