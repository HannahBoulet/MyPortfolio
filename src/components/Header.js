import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Hannah Boulet</h1>
            <p className="text-gray-300">Software Engineer</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p>Boone, NC</p>
            <p><a href="tel:9198699952" className="hover:text-blue-300">(919) 869-9952</a></p>
            <p><a href="mailto:hannah.j.boulet@gmail.com" className="hover:text-blue-300">hannah.j.boulet@gmail.com</a></p>
            <p><a href="https://www.linkedin.com/in/hannah-boulet" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">LinkedIn Profile</a></p>
          </div>
        </div>
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-6">
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#education" className="hover:text-blue-300">Education</a></li>
            <li><a href="#experience" className="hover:text-blue-300">Experience</a></li>
            <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
            <li><a href="#leadership" className="hover:text-blue-300">Leadership</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 