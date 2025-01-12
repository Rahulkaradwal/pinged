"use server";
import { prisma } from "@/app/utils/connect";
import { Suspense } from "react";
import Post from "./Post";

interface FeedProps {
  userId: string;
}

// async function fetchPosts(userId: string) {
//   // Fetch all posts from the users that the current user is following
//   const posts = await prisma.post.findMany({
//     where: {
//       userId: {
//         in: (
//           await prisma.follower.findMany({
//             where: {
//               followerId: userId,
//             },
//             select: {
//               followingId: true,
//             },
//           })
//         ).map((follower) => follower.followingId),
//       },
//     },
//     include: {
//       user: true,
//       comments: true,
//       likes: true,
//     },
//   });
//   return posts;
// }

// Fetch all posts from the users that the current user is following and the user's comments on those posts
async function fetchPosts(userId: string) {
  const posts = await prisma.post.findMany({
    where: {
      userId: {
        in: (
          await prisma.follower.findMany({
            where: {
              followerId: userId,
            },
            select: {
              followingId: true,
            },
          })
        ).map((follower) => follower.followingId),
      },
    },
    include: {
      user: true, // Include post owner details
      comments: {
        include: {
          user: true, // Include details of the user who made the comment
        },
      },
      likes: true, // Include likes on the posts
    },
  });

  // Filter comments made by the current user
  const postsWithUserComments = posts.map((post) => {
    return {
      ...post,
      currentUserComments: post.comments.filter(
        (comment) => comment.userId === userId
      ),
    };
  });

  return postsWithUserComments;
}

async function Feed({ userId }: FeedProps) {
  const posts = await fetchPosts(userId);

  return (
    <div className="my-6 bg-white shadow-md w-full p-4 rounded-lg">
      <Suspense fallback={<div>Loading...</div>}>
        {posts.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </Suspense>
    </div>
  );
}

export default Feed;
