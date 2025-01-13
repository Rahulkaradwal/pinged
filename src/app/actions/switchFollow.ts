import { auth } from "@clerk/nextjs/server";
import { prisma } from "../utils/connect";

export async function switchFollow(userId: string) {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("Unauthorized");
  }

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      } else {
        await prisma.follower.create({
          data: {
            followerId: currentUserId,
            followingId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.error("Error in switchFollow:", error);
    throw new Error("Failed to switch follow");
  }
}
