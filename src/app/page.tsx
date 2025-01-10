import AddPost from "@/components/addpost/AddPost";
import Feed from "@/components/feed/Feed";
import Birthday from "@/components/rightSideBar/birthday/Birthday";
import FriendRequest from "@/components/rightSideBar/friendRequest/FriendRequest";
import SponsoredAds from "@/components/rightSideBar/sponsoredAds/SponsoredAds";
import Stories from "@/components/story/Stories";

const Homepage = () => {
  return (
    <main className="bg-gray-100 overflow-x-scroll pt-6 flex gap-6  ">
      <div className="w-[20%]">Left Sidebar</div>
      <div className="w-[50%]">
        <Stories />
        <AddPost />
        <Feed />
      </div>

      <div className="w-[30%] flex flex-col  gap-6 ">
        <FriendRequest />
        <Birthday />
        <SponsoredAds size="sm" />
      </div>
    </main>
  );
};

export default Homepage;
