import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Subscribe = () => {
  return (
    <div className="container mx-auto w-full flex items-center bg-[#6B68FF]">
      <div className="w-full py-6 md:py-32 font-[Nunito] text-center">
        <h2 className="text-6xl text-white font-[600] mb-8 md:leading-snug">
          Subscribe to Our Newsletter
          <br />
          For Weekly Article Update.
        </h2>
        <p className="mt-0 mb-8 text-white">
          We have smartphone-related blogs, We regularly share them on our blog
          page.
          <br /> We can notify you via email. We will not spam you, we promise.
        </p>
        <div className="w-4/6 md:w-3/6 mx-auto flex items-center gap-4">
          <div className="flex items-center w-full text-lg bg-[#ffffff26]">
            <HiOutlineMail className="text-6xl text-white p-2" />
            <input
              className="bg-[#0000] border-0 py-4 w-full text-white outline-none"
              type="text"
              placeholder="Enter your e-mail address"
            />
          </div>
          <button className="w-fit text-xl font-semibold px-12 py-4 bg-[#16222D] text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
