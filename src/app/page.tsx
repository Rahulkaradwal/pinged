"use server";
import AddPost from "@/components/addpost/AddPost";
import Feed from "@/components/feed/Feed";
import MyProfile from "@/components/leftSideBar/MyProfile";
import Navigation from "@/components/leftSideBar/Navigation";
import Birthday from "@/components/rightSideBar/birthday/Birthday";
import FriendRequest from "@/components/rightSideBar/friendRequest/FriendRequest";
import SponsoredAds from "@/components/rightSideBar/sponsoredAds/SponsoredAds";
import Stories from "@/components/story/Stories";

const Homepage = async () => {
  return (
    <main className="bg-gray-100 overflow-x-scroll pt-6 flex gap-6  ">
      <div className="hidden md:block w-[20%]  ">
        <div className="flex flex-col gap-6 ">
          <MyProfile />
          <Navigation />
          <SponsoredAds size="sm" />
        </div>
      </div>
      <div className="md:w-[70%] lg:w-[50%] w-full ">
        <Stories />
        <AddPost />
        <Feed />
      </div>

      <div className="hidden w-[30%] lg:flex flex-col  gap-6 ">
        <FriendRequest />
        <Birthday />
        <SponsoredAds size="sm" />
      </div>
    </main>
  );
};

export default Homepage;
