import BookmarkedBlogs from "./BookmarkedBlogs";
import ReadTime from "./ReadTime";

export default function SideBar({ bookMarkBlogs, bookMarkTimes }) {
  return (
    <>
      <ReadTime bookMarkTimes={bookMarkTimes}></ReadTime>
      <BookmarkedBlogs bookMarkBlogs={bookMarkBlogs}></BookmarkedBlogs>
    </>
  );
}
