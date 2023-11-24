import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
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
          githubLink="https://github.com/HusaamNT/codeComics"
          websiteLink="https://husaamnt.github.io/codeComics/"
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
          des=" Create and edit code scripts here on this downloadable web pack text editor application. "
          src={JATE}
          githubLink="https://github.com/HusaamNT/textEditor"
          websiteLink="https://jate-text-editor19.herokuapp.com/"
        />
        <ProjectsCard
          title="NOTE TAKER"
          des=" Keep organised with this note taking platform where you can 
          create new notes, save them and delete them upon completion! "
          src={projectOne}
          githubLink=""
          websiteLink=""
        />
      </div>
    </section>
  );
};

export default Projects;
