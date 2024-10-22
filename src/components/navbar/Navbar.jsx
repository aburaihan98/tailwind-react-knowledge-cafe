import Profile from "../../assets/images/profile.png";

export default function Navbar() {
  return (
    <div className="pt-12 pb-7 border-b flex justify-between items-center">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <div>
        <img src={Profile} alt="profile" />
      </div>
    </div>
  );
}
