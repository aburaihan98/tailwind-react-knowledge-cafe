import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Blog({
  blog,
  handleAddToBookMark,
  handleAddToBookMarkTime,
}) {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <>
      <div>
        <div>
          <img className="w-full rounded-lg" src={cover} alt="Cover image" />
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-6">
            <div className="w-14 h-14">
              <img
                className="w-ful rounded-full"
                src={author_img}
                alt="author image"
              />
            </div>
            <div>
              <h2 className=" text-2xl font-bold">{author}</h2>
              <p className=" font-semibold">{posted_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-medium">{reading_time} min read</div>
            <button onClick={() => handleAddToBookMark(blog)}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
        <h2 className="text-4xl font-bold my-4">{title}</h2>
        <div className="flex gap-4">
          {hashtags.map((tag) => (
            <p key={tag} className="font-medium">
              #{tag}
            </p>
          ))}
        </div>
        <div className="text-xl font-semibold mt-5 pb-9 border-b">
          <button
            onClick={() => handleAddToBookMarkTime(reading_time)}
            className="text-[#6047EC] underline"
          >
            Mark as read
          </button>
        </div>
      </div>
    </>
  );
}
