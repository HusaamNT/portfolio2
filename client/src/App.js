import React from "react";
import Banner from "./components/banner/Banner";
import About from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import About2 from "./components/About2/About2";
import About3 from "./components/About3/About3";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <About2 />
        <Projects />
      </div>
    </div>
  );
}

export default App;