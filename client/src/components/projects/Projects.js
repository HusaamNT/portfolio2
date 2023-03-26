import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  REVVIT,
  CodeComics,
  RollerRide,
  JATE
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CODE COMICS"
          des=" Find all the latest comics & conversations on your favourite superheroes! 
          Find out all the coolest characters information and their appearances in comic series."
          src={CodeComics}
          githubLink="https://github.com/HusaamNT/websiteProjectOne"
          websiteLink="https://husaamnt.github.io/websiteProjectOne/"
        />
        <ProjectsCard
          title="REVVIT"
          des=" Post, share and talk about all your favourite cars! Gain insider insights, discover new cars, 
          and learn from the collective knowledge of the community. "
          src={REVVIT}
          githubLink="https://github.com/HusaamNT/revvit"
          websiteLink="https://enigmatic-beyond-97637.herokuapp.com/"
        />
        <ProjectsCard
          title="ROLLER RIDE"
          des=" Book tickets for the craziest rollercoaster rides! Discuss your day out at the park 
          in the blog and find the next hottest rollercoaster! "
          src={RollerRide}
          githubLink="https://github.com/HusaamNT/reactRollerRide"
          websiteLink="https://roller-coaster4.herokuapp.com/home"
        />
        <ProjectsCard
          title="JATE TEXT EDITOR"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={JATE}
          githubLink="https://github.com/HusaamNT/textEditor"
          websiteLink="https://jate-text-editor19.herokuapp.com/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          githubLink=""
          websiteLink=""
        />
      </div>
    </section>
  );
};

export default Projects;
