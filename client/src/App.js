import React from "react";
import Banner from "./components/banner/Banner";
import About from "./components/About/LeftAbout";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <Projects />

      </div>
    </div>
  );
}

export default App;