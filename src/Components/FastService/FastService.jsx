import { motion } from "framer-motion";
import React from "react";
import mobileRepairImg from "../../assets/images/mobileRepair4.svg";
import SectionContent from "../../sharedComponents/SectionContent/SectionContent";

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

export default FastService;
