import React from "react";

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "Python", "CSS", "Tailwind CSS"];
  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="px-4 py-2 bg-gray-100 rounded shadow">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
