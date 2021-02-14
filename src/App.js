import React from "react";
import Intro from "./Intro";
import About from "./About";
// import Projects from "./Projects";
import Contact from "./Contact";
import OtherThanCode from "./OtherThanCode";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      {/* <Projects /> */}
      <OtherThanCode />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
