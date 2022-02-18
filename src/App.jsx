import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience/Experience";
import FastService from "./components/FastService/FastService";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OurServices from "./components/OurServices/OurServices";
import Repair from "./components/Repair/Repair";
import Subscribe from "./components/Subscribe/Subscribe";

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
