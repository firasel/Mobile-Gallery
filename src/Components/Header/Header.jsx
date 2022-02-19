import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import './Header.css';

const Header = () => {
  return (
    <div className="headerBg">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
