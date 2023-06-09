import React from "react";
import Banner from "./components/banner/Banner";
import About from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import About2 from "./components/About2/About2";
import About3 from "./components/About3/About3";
import Contact from "./components/contact/Contact";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <About2 />
        <About3 />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;