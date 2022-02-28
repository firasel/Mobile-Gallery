import { motion } from "framer-motion";
import React from "react";
import mobileRepairImg from "../../assets/images/mobileRepair2.svg";
import SectionContent from "../../sharedComponents/SectionContent/SectionContent";
import "./Repair.css";

const Repair = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center mt-8 md:mt-0">
      <div className="w-full md:flex items-center justify-between">
        <div className="w-full md:w-5/12">
          <SectionContent
            content={{
              firstTitle: "We Repair Your",
              secondTitle: "Smart Phone",
              shortMsg: `We always try to provide you with good service in less time and at less
              cost.`,
            }}
          />
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, type: "spring", damping: 10 },
          }}
          viewport={{ once: true }}
          className="w-full md:order-first md:w-7/12"
        >
          <img className="w-full" src={mobileRepairImg} />
        </motion.div>
      </div>
    </div>
  );
};

export default Repair;
