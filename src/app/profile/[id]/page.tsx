import Feed from "@/components/feed/Feed";
import Navigation from "@/components/leftSideBar/Navigation";
import ProfileCard from "@/components/profile/ProfileCard";
import UserInformation from "@/components/profile/UserInformation";
import Birthday from "@/components/rightSideBar/birthday/Birthday";
import FriendRequest from "@/components/rightSideBar/friendRequest/FriendRequest";
import SponsoredAds from "@/components/rightSideBar/sponsoredAds/SponsoredAds";

async function page({ params }: { params: { id: string } }) {
  const userId = params.id;

  return (
    <main className="bg-gray-100 overflow-x-scroll pt-6 flex gap-6   ">
      <div className="hidden md:block w-[20%]  ">
        <div className="flex flex-col gap-6 ">
          <Navigation />
          <SponsoredAds size="sm" />
        </div>
      </div>
      <div className="md:w-[70%] lg:w-[50%] w-full ">
        <ProfileCard />
        <Feed userId={userId} />
      </div>

      <div className="hidden w-[30%] lg:flex flex-col  gap-6 ">
        <UserInformation userId={userId} />
        <FriendRequest />
        <Birthday />
        <SponsoredAds size="sm" />
      </div>
    </main>
  );
}

export default page;
