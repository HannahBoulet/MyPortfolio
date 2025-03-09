import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-full"></span>
            </h2>

            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                I am a passionate Software Engineer with a strong foundation in Computer Science from Appalachian State University.
                My academic journey has been complemented by hands-on experience in full-stack development, machine learning, and IT support.
              </p>
              <p>
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

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
              <img 
                src={process.env.PUBLIC_URL + '/images/HannahHeadshot.JPG'} 
                alt="Hannah Boulet" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
