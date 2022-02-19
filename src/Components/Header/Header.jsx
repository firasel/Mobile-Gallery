import React from "react";
import Hero from "../Hero/Hero.jsx";
import Navbar from "../Navbar/Navbar.jsx";
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
