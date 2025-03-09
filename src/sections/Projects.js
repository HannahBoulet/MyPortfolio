import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Full Stack Web Development Final Project</h3>
            <p className="text-gray-600 mt-2">January 2024 - May 2024</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">HTML</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Express</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Designed and developed a web application using the MEAN Stack, which enhanced user engagement through improved account management.</li>
            <li>Leveraged CSS to create a smooth user interface, resulting in a seamless browsing experience.</li>
            <li>Utilized TypeScript for code maintainability and scalability, leading to more efficient logic implementation.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Hunger and Health Coalition (HHC)</h3>
            <p className="text-gray-600 mt-2">January 2024 - May 2024</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Spring Boot</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MySQL</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Git</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">GitHub</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Jenkins</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Maven</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Linux</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Engineered API backend systems for HHC using Spring Boot, MySQL, and Java, ensuring efficient data management.</li>
            <li>Collaborated with HHC representatives to understand client requirements, translating them into effective implementations.</li>
            <li>Implemented CI/CD pipelines using Jenkins, resulting in automated testing and deployment for improved system reliability.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects; 