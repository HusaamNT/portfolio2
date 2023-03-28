import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const RightBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Game Developer", "Graphic Designer."],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Husaam NT</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-8 tracking-wide">
          With a passion for coding and a keen eye for design, I'm dedicated to
          crafting exceptional digital experiences that delight users and exceed
          expectations. From websites to video games to digital art!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a
                    href="https://www.linkedin.com/in/husaamnt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bannerIcon">
                      <FaLinkedin />
                    </span>
                  </a>
                  <a
                    href="https://github.com/HusaamNT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bannerIcon">
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/m.hntnt/?theme=dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bannerIcon">
                      <FaInstagram />
                    </span>
                  </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBanner;
