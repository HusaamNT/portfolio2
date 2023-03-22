import React from 'react'
import Title from '../layouts/Title';

import { phone } from "../../assets/index";

const LeftAbout = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Who am I?" des="About me" />
      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
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