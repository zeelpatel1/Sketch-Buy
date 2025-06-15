import React from "react";
import Post from "@/app/components/Post";

const UserDashboard = async() => {

  const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSketch`,{
    cache:'no-cache'
  })
  const post=await res.json()


  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Available Sketches</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Post post={post}/>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
