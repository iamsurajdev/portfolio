import React from "react";
import Intro from "./Intro";
import About from "./About";
import Technologies from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import BlogsAndPosts from "./BlogsAndPosts";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Technologies />
      <Projects />
      <BlogsAndPosts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
