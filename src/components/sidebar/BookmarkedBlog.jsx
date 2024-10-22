import React from "react";

export default function BookmarkedBlog({ blog }) {
  return (
    <div className="bg-white p-5 rounded-lg mb-4">
      <p className="text-lg font-semibold ">{blog?.title}</p>
    </div>
  );
}
