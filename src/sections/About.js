import React from 'react';

function About() {
  return (
    <section id="about" className="py-12">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              I am a passionate Software Engineer with a strong foundation in Computer Science from Appalachian State University. 
              My academic journey has been complemented by hands-on experience in full-stack development, machine learning, and IT support.
            </p>
            <p className="mb-4">
              With a Certificate in Data Science and experience working with diverse technologies, I bring a unique blend of 
              technical expertise and problem-solving skills to every project. I'm particularly interested in developing 
              efficient, scalable solutions that make a real impact.
            </p>
            <p>
              As the President of Women In Computer Science, I've demonstrated leadership abilities while fostering an 
              inclusive tech community. I'm always eager to take on new challenges and contribute to innovative projects 
              that push the boundaries of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
