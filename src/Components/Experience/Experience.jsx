import { motion } from "framer-motion";
import React from "react";
import mobileRepairImg from "../../assets/images/mobileRepair3.svg";
import SectionContent from "../../sharedComponents/SectionContent/SectionContent";

const Experience = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center">
      <div className="w-full md:flex items-center justify-between">
        <div className="w-full md:w-5/12 md:ml-10">
          <SectionContent
            content={{
              firstTitle: "Experienced",
              secondTitle: "Repairing Service",
              shortMsg: `We have been providing smartphone repair services for more than ten years.`,
            }}
          />
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, type: "spring", damping: 10 },
          }}
          viewport={{ once: true }}
          className="w-full md:w-7/12"
        >
          <img className="w-full" src={mobileRepairImg} />
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
