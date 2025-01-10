import AddPost from "@/components/addpost/AddPost";
import Feed from "@/components/feed/Feed";
import Stories from "@/components/story/Stories";

const Homepage = () => {
  return (
    <main className="bg-gray-100 overflow-x-scroll ">
      <Stories />
      <AddPost />
      <Feed />
    </main>
  );
};

export default Homepage;
