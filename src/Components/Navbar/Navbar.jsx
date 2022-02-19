import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  console.log(expand);
  return (
    <nav className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="w-fit flex items-center">
          <div className="my-6 mr-3 py-3 px-[1.1rem] rounded-full bg-[#6B68FF] text-white font-semibold text-2xl italic">
            M
          </div>
          <div className="text-white font-semibold font-[Nunito]">
            Mobile
            <br />
            Gallery
          </div>
        </div>
        <div className="hidden md:block font-[Nunito]">
          <span className="text-white opacity-60 hover:opacity-75 transition-all duration-200 cursor-pointer px-2 py-2">
            Location
          </span>
          <span className="text-white opacity-60 hover:opacity-75 transition-all duration-200 cursor-pointer px-2 py-2 md:ml-10">
            Blogs
          </span>
          <span className="text-white opacity-60 hover:opacity-75 transition-all duration-200 cursor-pointer px-2 py-2 md:ml-10">
            Testimonials
          </span>
          <span className="text-white opacity-60 hover:opacity-75 transition-all duration-200 cursor-pointer px-2 py-2 md:ml-10">
            Contact
          </span>
        </div>
        <div
          className="block md:hidden text-white text-4xl p-2 rounded-lg hover:bg-[#101820] cursor-pointer border-0"
          onClick={() => setExpand(!expand)}
        >
          <CgMenuRight />
        </div>
      </div>
      <div
        className={`${
          !expand ? "h-0" : "h-auto"
        } overflow-hidden block md:hidden text-center font-[Nunito]`}
      >
        <h4 className="text-white opacity-60 hover:opacity-80 transition-all duration-200 cursor-pointer px-2 py-2">
          Location
        </h4>
        <h4 className="text-white opacity-60 hover:opacity-80 transition-all duration-200 cursor-pointer px-2 py-2 md:ml-10">
          Blogs
        </h4>
        <h4 className="text-white opacity-60 hover:opacity-80 transition-all duration-200 cursor-pointer px-2 py-2 md:ml-10">
          Testimonials
        </h4>
        <h4 className="text-white opacity-60 hover:opacity-80 transition-all duration-200 cursor-pointer px-2 py-2 md:ml-10">
          Contact
        </h4>
      </div>
    </nav>
  );
};

export default Navbar;
