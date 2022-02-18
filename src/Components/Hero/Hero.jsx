import React from "react";
import mobileRepairImg from "../../assets/images/mobileRepair1.jpg";

const Hero = () => {
  return (
    <header className="container mx-auto mt-5">
      <div className="h-full flex items-center justify-between">
        {/* Content start */}
        <div className="w-full md:-mt-36 font-[Nunito]">
          <h2 className="text-6xl text-white font-bold mb-6 md:leading-snug">
            Quickly Repair
            <br />
            Your Smart Phone <br />
            in Mobile Gallery.
          </h2>
          <p className="text-white text-lg opacity-80">
            Need to repair your smartphone? Don't worry about it! We are always
            prepared to give you a good service, come to our shop now.
          </p>
          <button className="bg-[#6B68FF] text-white font-semibold px-8 py-3 mt-7 rounded-sm md:px-14 hover:bg-[#6562ff] transition-all duration-200">
            Learn More
          </button>
        </div>
        {/* Content end */}
        {/* Image start */}
        <div className="w-full">
          <div className="w-5/6 ml-auto mt-4 px-5 py-5 imgBgStyle">
            <img className="w-full h-full" src={mobileRepairImg} />
          </div>
        </div>
        {/* Image end */}
      </div>
    </header>
  );
};

export default Hero;
