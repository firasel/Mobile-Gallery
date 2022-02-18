import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  const footerLinks = [
    { title: "Location", links: ["Bangladesh"] },
    { title: "Contact", links: ["About Me", "Teams", "FAQ"] },
    { title: "Legals", links: ["Privacy", "Disclaimar", "Terms"] },
  ];

  const socialLink = [
    {
      icon: <ImFacebook />,
    },
    {
      icon: <AiOutlineTwitter />,
    },
    {
      icon: <BsInstagram />,
    },
  ];

  return (
    <div className="container w-full mx-auto py-6 md:py-14 font-[Nunito]">
      <div className="flex items-start justify-between">
        <div className="w-full">
          <div className="w-fit flex items-center">
            <div className="my-6 mr-3 py-3 px-[1.1rem] rounded-full bg-[#16222D] text-white font-semibold text-2xl italic">
              M
            </div>
            <div className="text-[#40434A] font-semibold font-[Nunito]">
              Mobile
              <br />
              Gallery
            </div>
          </div>
          <div className="flex items-center gap-4 mb-12">
            {socialLink.map((socialData, index) => (
              <div
                key={index}
                className="w-[2.8rem] h-[2.8rem] rounded-full p-2 bg-[#6B68FF] hover:bg-[#5d5bff] transition-all duration-300 text-white text-2xl flex items-center justify-center"
              >
                {socialData.icon}
              </div>
            ))}
          </div>
          <p className="text-[#585C65] text-lg">
            Copyright © 2022 Mobile Gallery
          </p>
        </div>
        <div className="w-full flex items-start justify-between px-4">
          {footerLinks?.map((linkData, index) => (
            <div key={index} className="text-lg">
              <h4 className="text-[#40434A] font-semibold mb-7">
                {linkData.title}
              </h4>
              {linkData?.links?.map((link, index) => (
                <div className="text-[#70737C] mb-7 cursor-pointer" key={index}>
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
