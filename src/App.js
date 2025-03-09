import React from 'react';
import Header from './components/Header';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Leadership from './sections/Leadership';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 Hannah Boulet. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
