"use server";

import { prisma } from "../utils/connect";

export async function likePost(postId: number, userId: string) {
  if (!userId || !postId) return;
  // Check if the user already liked the post
  const existingLike = await prisma.like.findFirst({
    where: { postId, userId },
  });

  if (existingLike) {
    await prisma.like.delete({
      where: { id: existingLike.id },
    });
  } else {
    await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
  }
}
