import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience/Experience";
import FastService from "./components/FastService/FastService";
import Header from "./components/Header/Header";
import OurServices from "./components/OurServices/OurServices";
import Repair from "./components/Repair/Repair";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#FBFDFF]">
      <Header />
      <Repair />
      <OurServices />
      <Experience />
      <FastService />
    </div>
  );
}

export default App;
