import React from "react";
import mobileRepairImg from "../../assets/images/mobileRepair2.svg";
import SectionContent from "../../sharedComponents/SectionContent/SectionContent";
import "./Repair.css";

const Repair = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center">
      <div className="w-full flex items-center justify-between">
        <div className="w-7/12">
          <img className="w-full" src={mobileRepairImg} />
        </div>
        <div className="w-5/12">
          <SectionContent
            content={{
              firstTitle: "We Repair Your",
              secondTitle: "Smart Phone",
              shortMsg: `We always try to provide you with good service in less time and at less
              cost.`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Repair;
