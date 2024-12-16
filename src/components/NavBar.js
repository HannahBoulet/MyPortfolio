import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black shadow-md z-50">
      <ul className="flex justify-center space-x-6 py-4">
        {["Landing", "About", "Skills", "Education", "Experience", "Contact"].map(
          (section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="text-white hover:text-blue-500 transition"
              >
                {section}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
