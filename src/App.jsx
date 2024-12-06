import Lenis from "lenis";
import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <div className="w-full h-full bg-[#0B0B0B]">
      <Header />
      <Home />
      <About />
      <Skill />
    </div>
  );
}

export default App;