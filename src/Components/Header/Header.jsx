import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="bg-[#16222D]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
