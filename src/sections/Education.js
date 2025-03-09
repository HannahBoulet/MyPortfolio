import React from 'react';

function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Education</h2>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Appalachian State University</h3>
              <p className="text-gray-600">Bachelor of Science in Computer Science</p>
            </div>
            <div className="text-gray-600 mt-2 md:mt-0">
              <p>August 2022 - May 2024</p>
              <p>GPA: 3.55/4.0</p>
            </div>
          </div>
          <p className="text-gray-600">Boone, NC</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Appalachian State University</h3>
              <p className="text-gray-600">Certificate of Data Science</p>
            </div>
            <div className="text-gray-600 mt-2 md:mt-0">
              <p>Received December 2023</p>
            </div>
          </div>
          <p className="text-gray-600">Boone, NC</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
