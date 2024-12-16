import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="py-10 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold">Where to Find Me</h2>
        <div className="mt-4 flex justify-center space-x-6">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/hannah-boulet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            <i className="fab fa-linkedin fa-2x"></i> {/* Icon (Optional) */}
            <span className="ml-2">LinkedIn</span>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/hannahboulet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:underline"
          >
            <i className="fab fa-github fa-2x"></i> {/* Icon (Optional) */}
            <span className="ml-2">GitHub</span>
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
