import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience/Experience.jsx";
import FastService from "./components/FastService/FastService.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import OurServices from "./components/OurServices/OurServices.jsx";
import Repair from "./components/Repair/Repair.jsx";
import Subscribe from "./components/Subscribe/Subscribe.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#FBFDFF]">
      <Header />
      <Repair />
      <OurServices />
      <Experience />
      <FastService />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
