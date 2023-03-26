import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

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
          des=" Find all the latest comics & conversations on your favourite superheroes! "
          src={projectOne}
          githubLink="https://github.com/HusaamNT/websiteProjectOne"
          websiteLink="https://husaamnt.github.io/websiteProjectOne/"
        />
        <ProjectsCard
          title="REVVIT"
          des=" Post, share and talk about all your favourite cars! "
          src={projectTwo}
          githubLink="https://github.com/HusaamNT/revvit"
          websiteLink="https://enigmatic-beyond-97637.herokuapp.com/"
        />
        <ProjectsCard
          title="ROLLER RIDE"
          des=" Book tickets for the craziest rollercoaster rides! Discuss your day out at the park 
          in the blog and find the next hottest rollercoaster! "
          src={projectThree}
          githubLink="https://github.com/HusaamNT/reactRollerRide"
          websiteLink="https://roller-coaster4.herokuapp.com/home"
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects