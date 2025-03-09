import React from 'react';

function Leadership() {
  return (
    <section id="leadership" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Leadership</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Women In Computer Science</h3>
            <p className="text-gray-600">President/Member</p>
          </div>
          <div className="text-gray-600 mt-2 md:mt-0">
            <p>August 2021 - May 2024</p>
            <p>Boone, NC</p>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
          <li>Led a dynamic team in planning and executing fundraising activities, which supported club initiatives.</li>
          <li>Fostered a sense of community by organizing regular meetings and events, resulting in increased member engagement and networking opportunities.</li>
        </ul>
      </div>
    </section>
  );
}

export default Leadership; 