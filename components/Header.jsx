import Image from "next/image";
import Link from "next/link";
import { Sidebar } from ".";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="h-16 sticky top-0 left-0 right-0 shadow bg-white z-10 flex items-center justify-between px-2 md:px-8 lg:px-16 text-black">
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-12">
            <Image src="/img/logo.jpg" alt="logo" layout="fill" />
          </div>
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-red-400">
            Tik<span className="text-blue-500">tok</span>
          </h1>
        </Link>

        <AiOutlineMenu
          className="md:hidden text-xl cursor-pointer hover:rotate-180 duration-500"
          onClick={() => setShowSidebar(true)}
        />
      </div>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
    </>
  );
};

export default Header;
