import React from "react";

const Landing = () => {
  return (
    <section
      id="landing"
      className="h-screen bg-blue-500 text-white flex items-center justify-left px-3"
    >
      <div className="text-left">
        <h1 className="text-5xl font-bold">Hannah Boulet</h1>
        <p className="mt-4 text-lg">Entry level Software Engineer</p>
        <a
          href="#about"
          className="mt-6 inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100"
        >
          Learn More About Me
        </a>
      </div>
    </section>
  );
};

export default Landing;
