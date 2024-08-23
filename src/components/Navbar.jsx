import { ArrowRightIcon, DownloadIcon } from "@heroicons/react/solid";
import React, { useState, useEffect, useRef } from "react";
import generateAndSavePDF from "../generateResumePDF";
import generateAndSaveDocx from "../generateResumeDOC";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDownloadClick = (format) => {
    if (format === "pdf") {
      generateAndSavePDF();
    } else if (format === "docx") {
      generateAndSaveDocx();
    }
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="bg-gray-600 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 text-xl">
          Eric Keeton
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">
            About Me
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#working" className="mr-5 hover:text-white">
            In Progress
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>
        <div className="relative flex items-center">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-lime-500 hover:text-white rounded text-base mt-4 md:mt-0 mr-4"
          >
            Download My Resume
            <DownloadIcon className="w-4 h-4 ml-1" />
          </button>
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30">
              <a
                href="#"
                onClick={() => handleDownloadClick("pdf")}
                className="block px-4 py-2 text-gray-800 hover:bg-lime-500 hover:text-white"
              >
                Download PDF
              </a>
              <a
                href="#"
                onClick={() => handleDownloadClick("docx")}
                className="block px-4 py-2 text-gray-800 hover:bg-lime-500 hover:text-white"
              >
                Download .docx
              </a>
            </div>
          )}
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-lime-500 hover:text-white rounded text-base mt-4 md:mt-0"
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
