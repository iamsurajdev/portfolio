import React from "react";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Technologies from "./Technologies/Technologies";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import BlogsAndPosts from "./BlogsAndPosts/BlogsAndPosts";
import Footer from "./Footer/Footer";

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
