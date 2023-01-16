import { topics } from "@/utils/constants";
import { FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const Sidebar = ({ setShowSidebar }) => {
  return (
    <div className="fixed top-16 left-0 bottom-0 overflow-y-scroll bg-white shadow px-3 md:px-5  pt-5 text-black">
      <FaTimes
        className="absolute top-6 right-2 text-xl cursor-pointer hover:scale-110 md:hidden"
        onClick={() => setShowSidebar(false)}
      />
      <div className="px-8 md:px-4">
        <div className="flex gap-3 items-center mb-4 text-red-400 font-bold text-xl">
          <AiFillHome />
          <p>For You</p>
        </div>

        <button className="w-full rounded  hover:scale-105 py-1 mb-3 bg-blue-500 text-white">
          Log In
        </button>
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center gap-3  text-xl font-semibold mb-2 border-2 px-2 rounded border-black cursor-pointer hover:bg-red-100"
          >
            <div className="text-blue-500">{topic.icon}</div>
            <p className="text-black">{topic.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
