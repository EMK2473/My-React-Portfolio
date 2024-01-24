import { AcademicCapIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { working } from "../data";


export default function Working() {
    return(
        <section id="working">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            In Progress
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {working.map((work) => (
            <div key={work} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center ring-gray-400 ring-2">
                <BadgeCheckIcon className="text-lime-500 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {work}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}