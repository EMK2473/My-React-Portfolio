import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { projects } from "../data";
import "../custom.css"; 
import "bootstrap/dist/css/bootstrap.min.css";


function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="projects" className="text-lime-500 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <h4>Call it a hobby.</h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {projects.map((project, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={project.image}
                alt={project.title}
              />
              <Carousel.Caption>
                <h3 className="text-lime-500">{project.subtitle}</h3>
                <h2 className="text-white">{project.title}</h2>
                <p className="text-white">{project.description}</p>
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    View Repository
                  </a>
                )}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
