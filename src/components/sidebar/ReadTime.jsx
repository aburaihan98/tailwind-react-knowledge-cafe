export default function ReadTime({ bookMarkTimes }) {
  return (
    <div className="py-5 px-12 bg-[#1111110D] rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-[#6047EC]">
        Spent time on read : {bookMarkTimes} min
      </h2>
    </div>
  );
}
