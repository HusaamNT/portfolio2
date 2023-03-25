import React from 'react'
import Title from '../layouts/Title';
import { photo } from "../../assets/index";

const RightImg2 = () => {
  return (
    <section
      id="aboutme"
      className="w-full py-20 gap"
    >
      
      <div className="w-full flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={photo}
        alt="bannerImg"
      />
      <div className="absolute w-[350px] h-[450px] lgl:w-[550px] lgl:h-[730px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    
    </div>
    </section>
  );
}

export default RightImg2