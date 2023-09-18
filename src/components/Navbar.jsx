import { TbSquareRotatedFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="w-screen absolute z-50">
      <div className="navbar  text-white w-[80vw] h-24 flex justify-around m-auto items-center ">
        <div className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100">
          EVENTS
        </div>

        <TbSquareRotatedFilled className="opacity-50" />

        <div className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100">
          ABOUT
        </div>

        <TbSquareRotatedFilled className="opacity-50" />

        <div className=" font-black text-4xl cursor-pointer">
          <span className=" text-purple-800">T</span>antra
          <span className=" text-purple-800">F</span>iesta
        </div>

        <TbSquareRotatedFilled className="opacity-50" />

        <div className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100">
          SPEAKERS
        </div>

        <TbSquareRotatedFilled className="opacity-50" />

        <div className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100">
          CONTACT
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
