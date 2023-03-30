import React from 'react'
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiInsomnia, SiBlender, SiUnrealengine } from "react-icons/si";
import { BsGit } from "react-icons/bs";



const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full"id="skill">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Skill</h2>
          <h2 className="text-3xl md:text-3xl font-bold">Development Skill</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-x-6 ">
          <div class="mb-12 lg:mb-0 text-center mx-auto">
            <FaReact className="h-10 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">REACT</h6>
          </div>
          <div class="mb-12 lg:mb-0 text-center mx-auto">
          <IoLogoJavascript className="h-11 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">JAVASCRIPT</h6>
          </div>
          <div class="mb-12 text-center mx-auto">
            <AiFillHtml5 className="h-10 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">HTML5</h6>
          </div>
          <div class="mb-12 text-center mx-auto">
            <DiCss3 className="h-10 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">CSS3</h6>
          </div>
          <div class="mb-12 text-center mx-auto">
            <FaPython className="h-10 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">Python</h6>
          </div>
        </div>
        <div className="mb-12 mt-5 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl md:text-3xl font-bold">Software Skill</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-x-6 ">
          <div class="mb-12 lg:mb-0 text-center mx-auto">
            <BsGit className="h-10 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">GIT</h6>
          </div>
          <div class="mb-12 lg:mb-0 text-center mx-auto">
          <FaDocker className="h-11 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">DOCKER</h6>
          </div>
          <div class="mb-12 text-center mx-auto">
            <SiInsomnia className="h-10 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">INSOMNIA</h6>
          </div>
          <div class="mb-12 text-center mx-auto">
            <SiUnrealengine className="h-10 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">UNREAL ENGINE</h6>
          </div>
          <div class="mb-12 text-center mx-auto">
            <SiBlender className="h-10 w-10 text-designColor mx-auto"/>
            <h6 class="font-medium">BLENDER</h6>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills