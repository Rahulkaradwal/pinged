import AddPost from "@/components/addpost/AddPost";
import Stories from "@/components/story/Stories";

const Homepage = () => {
  return (
    <main className="bg-gray-100 overflow-x-scroll">
      <Stories />
      <AddPost />
    </main>
  );
};

export default Homepage;
