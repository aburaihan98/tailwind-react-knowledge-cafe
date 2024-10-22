import { useEffect, useState } from "react";
import Blog from "./Blog";

export default function Blogs({
  handleAddToBookMark,
  handleAddToBookMarkTime,
}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../../../public/blogs.json");
      const result = await response.json();
      setBlogs(result);
    };
    fetchData();
  }, []);

  const totalReadTime = blogs.reduce((total, blog) => {
    return total + blog.reading_time;
  }, 0);

  return (
    <>
      {blogs.map((blog) => (
        <Blog
          key={blog?.id}
          blog={blog}
          handleAddToBookMark={handleAddToBookMark}
          handleAddToBookMarkTime={handleAddToBookMarkTime}
        ></Blog>
      ))}
    </>
  );
}
