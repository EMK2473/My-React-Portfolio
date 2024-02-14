// Navbar.js
import { ArrowRightIcon, DownloadIcon } from "@heroicons/react/solid";
import React from "react";
import generateAndSavePDF from "../generateResumePDF";

export default function Navbar() {
  return (
    <header className="bg-gray-600 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Eric Keeton
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
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
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <div className="flex items-center">
          <a
            href="#resume"
            onClick={generateAndSavePDF}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-lime-500 hover:text-white rounded text-base mt-4 md:mt-0 mr-4"
          >
            Download My Resume
            <DownloadIcon className="w-4 h-4 ml-1" />
          </a>
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
