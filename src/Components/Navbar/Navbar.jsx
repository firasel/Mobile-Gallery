import React from "react";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="w-fit flex items-center">
          <div className="my-3 mr-3 py-3 px-[1.1rem] rounded-full bg-[#6B68FF] text-white font-semibold text-2xl italic">
            M
          </div>
          <div className="text-white font-semibold font-[Nunito] ">
            Mobile
            <br />
            Gallery
          </div>
        </div>
        <div className="flex items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;
