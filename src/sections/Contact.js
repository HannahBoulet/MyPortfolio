import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4 text-lg">Feel free to reach out to me!</p>
        <div className="mt-6 space-y-4">
          <p>Email: <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a></p>
          <a
            href="/path-to-your-resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
