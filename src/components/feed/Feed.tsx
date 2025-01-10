import Post from "./Post";

function Feed() {
  return (
    <div className="my-6 bg-white shadow-md w-full p-4 rounded-lg">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
