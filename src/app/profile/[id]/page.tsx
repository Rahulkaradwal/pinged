import Feed from "@/components/feed/Feed";
import UserPostInfo from "@/components/feed/UserPostInfo";
import ProfileCard from "@/components/profile/ProfileCard";
import React from "react";

function page() {
  return (
    <main className="bg-gray-100 overflow-x-scroll pt-6 flex gap-6  flex-col ">
      <ProfileCard />
      <Feed />
    </main>
  );
}

export default page;
