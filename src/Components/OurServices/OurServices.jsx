import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsTablet } from "react-icons/bs";
import { IoMdPhonePortrait } from "react-icons/io";

const OurServices = () => {
  const services = [
    {
      icon: <IoMdPhonePortrait />,
      title: `Smartphone Repair`,
      content: `We repair all brands of mobile phones with 100% customer
        satisfaction and we offer a 90-day warranty.`,
    },
    {
      icon: <BsTablet />,
      title: `Tablet Repair`,
      content: `You can get the highest quality repair services on any brand
        tablet.`,
    },
    {
      icon: <AiFillSetting />,
      title: `Software Update`,
      content: `We try to solve any software problem. Phone unlock, flash, version
        update, etc.`,
    },
  ];

  return (
    <div className="container mx-auto min-h-screen flex items-center">
      <div className="my-3 w-full">
        <h2 className="text-3xl md:text-4x lg:text-6xl text-center text-[#27292E] font-bold mb-10 md:leading-snug">
          Our Services
        </h2>
        <div className="md:flex items-start justify-evenly">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:mx-6 bg-white shadow-lg rounded-lg  px-3 md:px-4 py-6 min-h-[22rem] flex items-center text-center font-[Nunito] transition-all duration-300 mb-8 md:mb-0 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full">
                <div className="w-[4.8rem] h-[4.8rem] md:w-[5.4rem] md:h-[5.4rem] px-5 py-5 text-6xl mx-auto bg-[#6B68FF] rounded-full text-white flex items-center justify-center mb-6 mt-3">
                  {service.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-4">{service.title}</h4>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
