import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
  return (
    <section
      id="aboutme"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftAbout />
      <RightAbout />
    </section>
  );
};

export default About;
