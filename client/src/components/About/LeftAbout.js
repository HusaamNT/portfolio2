import React from 'react'
import Title from '../layouts/Title';

import { phone } from "../../assets/index";

const LeftAbout = () => {
  return (
    <section
      id="aboutme"
      className="w-full py-20"
    >
      <Title title="Who am I?" des="About me" />
      <div className="w-full flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={phone}
        alt="bannerImg"
      />
      <div className="absolute w-[350px] h-[450px] lgl:w-[550px] lgl:h-[730px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    
    </div>
    </section>
  );
}

export default LeftAbout