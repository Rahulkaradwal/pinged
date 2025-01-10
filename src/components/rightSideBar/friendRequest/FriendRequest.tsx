import React from "react";
import Request from "./Request";

function FriendRequest() {
  return (
    <div className="bg-white shadow-md w-full  p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <p>Friend Requests</p>
        <button className="text-sm text-blue-500">See all</button>
      </div>
      <div className="flex flex-col gap-4">
        <Request />
        <Request />
        <Request />
      </div>
    </div>
  );
}

export default FriendRequest;
