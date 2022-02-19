import React from "react";
import mobileRepairImg from "../../assets/images/mobileRepair4.svg";
import SectionContent from "../../sharedComponents/SectionContent/SectionContent.jsx";

const FastService = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center">
      <div className="w-full md:flex items-center justify-between">
        <div className="w-full md:w-5/12">
          <SectionContent
            content={{
              firstTitle: "Fast and Trusted",
              secondTitle: "Repairing Service",
              shortMsg: `We focus on repairing your smartphone in less time.`,
            }}
          />
        </div>
        <div className="w-full md:order-first md:w-7/12">
          <img className="w-full" src={mobileRepairImg} />
        </div>
      </div>
    </div>
  );
};

export default FastService;
