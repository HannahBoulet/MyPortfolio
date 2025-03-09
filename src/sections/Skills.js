import React from 'react';

function Skills() {
  const skillCategories = {
    'Languages': ['C', 'Java', 'Python', 'MySQL', 'HTML', 'JavaScript', 'TypeScript', 'Haskell', 'R'],
    'Tools': ['Eclipse', 'Visual Studio', 'PyCharm', 'Jupyter Notebook', 'Terminal'],
    'Frameworks': ['Rest API', 'Express', 'Angular', 'React', 'Jest', 'Spring Boot'],
    'Database Systems': ['MongoDB', 'MySQL'],
    'Methodologies': ['Agile', 'Scrum', 'Open Dialog', 'Over Communicate', 'Brainstorming'],
    'Others': ['Docker', 'Git', 'GitHub', 'PostMan', 'Linux', 'GDB', 'JWT', 'Node.JS', 'Maven', 'Jenkins']
  };

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
