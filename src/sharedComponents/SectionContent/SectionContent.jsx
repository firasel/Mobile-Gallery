import React from "react";

const SectionContent = ({ content }) => {
  return (
    <div className="w-full mb-16 font-[Nunito]">
      <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#27292E] font-[600] mb-6 md:leading-snug">
        {content?.firstTitle}
        <br />
        {content?.secondTitle}
      </h2>
      <p className="text-[#585C65] text-base md:text-lg opacity-80">{content?.shortMsg}</p>
    </div>
  );
};

export default SectionContent;
