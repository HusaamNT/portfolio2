import React from "react";
import LeftAbout2 from "./LeftAbout2";
import RightImg2 from "./RightImg2";

const About2 = () => {
  return (
    <section
      id="aboutme"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftAbout2 />
      <RightImg2 />
    </section>
  );
};

export default About2;
