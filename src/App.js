import React from "react";
import Navbar from "./components/NavBar";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Landing />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
