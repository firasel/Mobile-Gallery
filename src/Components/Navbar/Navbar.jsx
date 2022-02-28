import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="container mx-auto"
    >
      <div className="flex items-center justify-between">
        <div className="w-fit flex items-center cursor-pointer">
          <div className="my-3 md:my-6 mr-2 md:mr-3 py-2 md:py-3 px-[0.8rem] md:px-[1.1rem] rounded-full bg-[#6B68FF] text-white font-semibold text-xl md:text-2xl italic">
            M
          </div>
          <div className="text-white leading-4 md:leading-5 font-semibold font-[Nunito]">
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
          className="block md:hidden text-white text-3xl p-1 rounded-lg hover:bg-[#101820] cursor-pointer border-0"
          onClick={() => setExpand(!expand)}
        >
          <CgMenuRight />
        </div>
      </div>
      <AnimatePresence>
        {expand && (
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: "auto",
              transition: {
                duration: 0.2,
                type: "spring",
                damping: 12,
              },
            }}
            exit={{ height: 0 }}
            className="overflow-hidden block md:hidden text-center font-[Nunito] absolute w-full bg-[#16222d] left-0 pt-2 pb-3 z-10"
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
