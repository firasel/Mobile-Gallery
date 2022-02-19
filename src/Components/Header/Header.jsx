import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import './Header.css';

const Header = () => {
  return (
    <div className="headerBg px-5 sm:px-0">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
