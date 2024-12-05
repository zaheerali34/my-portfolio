import Lenis from "lenis";
import React from "react";
import Header from "./Components/Header/Header";

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });
  return <div>
    <Header/>
  </div>;
}

export default App;
