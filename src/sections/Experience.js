import React from 'react';

function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Work Experience</h2>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Ferrous Design</h3>
              <p className="text-gray-600">Full Stack Engineer</p>
            </div>
            <div className="text-gray-600 mt-2 md:mt-0">
              <p>June 2024 - January 2025</p>
              <p>Boone, NC</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
            <li>Developed a Python-based machine learning model to determine cap orientation using real-time image capture.</li>
            <li>Designed and implemented a Python-powered email migration tool utilizing SMTP/IMAP protocols, CLI commands, and AWS; supported flexible migration paths, including transferring emails between inboxes, uploading to S3 buckets, and restoring from S3 to inboxes.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Appalachian State University</h3>
              <p className="text-gray-600">Student IT Support Technician</p>
            </div>
            <div className="text-gray-600 mt-2 md:mt-0">
              <p>September 2022 - May 2024</p>
              <p>Boone, NC</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
            <li>Troubleshot and repaired laptops for students and faculty by diagnosing hardware and software issues, resulting in improved device functionality.</li>
            <li>Communicated with customers about the status of their devices using effective interpersonal skills, which led to increased customer satisfaction.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Moody's</h3>
              <p className="text-gray-600">Moody's MIST Intern</p>
            </div>
            <div className="text-gray-600 mt-2 md:mt-0">
              <p>June 2023 - August 2023</p>
              <p>Charlotte, NC</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
            <li>Collaborated with front-end team members to ensure seamless integration and user-friendly functionality of the API, resulting in a cohesive development process.</li>
            <li>Developed API backend using Java for SQL statement generation, which enabled efficient data retrieval and manipulation.</li>
            <li>Utilized BitBucket for version control and IntelliJ for coding, leading to more organized workflows and streamlined development.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
