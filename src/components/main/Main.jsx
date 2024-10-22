import { useState } from "react";
import SideBar from "../sidebar/SideBar";
import Blogs from "./blogs/Blogs";

export default function Main() {
  const [bookMarkBlogs, setBookMarkBlogs] = useState([]);
  const [bookMarkTimes, setBookMarkTimes] = useState(0);

  const handleAddToBookMark = (blog) => {
    setBookMarkBlogs([...bookMarkBlogs, blog]);
  };

  const handleAddToBookMarkTime = (time) => {
    setBookMarkTimes(bookMarkTimes + time);
  };

  return (
    <div className="lg:grid grid-cols-3 gap-6 mt-8">
      <div className="col-span-2  space-y-10">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleAddToBookMarkTime={handleAddToBookMarkTime}
        ></Blogs>
      </div>
      <div className="col-span-1">
        <SideBar
          bookMarkBlogs={bookMarkBlogs}
          bookMarkTimes={bookMarkTimes}
        ></SideBar>
      </div>
    </div>
  );
}
