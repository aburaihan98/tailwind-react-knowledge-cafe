import BookmarkedBlog from "./BookmarkedBlog";

export default function BookmarkedBlogs({ bookMarkBlogs }) {
  return (
    <div className="p-7 bg-[#1111110D] rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Bookmarked Blogs : {bookMarkBlogs?.length}
      </h2>
      {bookMarkBlogs.map((blog) => (
        <BookmarkedBlog key={blog?.id} blog={blog}></BookmarkedBlog>
      ))}
    </div>
  );
}
