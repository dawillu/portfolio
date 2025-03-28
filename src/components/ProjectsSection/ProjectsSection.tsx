import React, { useState, useEffect, useCallback } from "react";
import "./ProjectSection.css";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  name: string;
  path: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "dawillu",
    name: "DAWILLU",
    path: "/dawillu",
    image: "/assets/images/dynamicImages/dawillu.png",
  },
  {
    id: "galaxytrucker",
    name: "GALAXY TRUCKER",
    path: "/GalaxyTrucker",
    image: "/assets/images/dynamicImages/galaxytrucker.png",
  },
  {
    id: "dabot",
    name: "DABOT",
    path: "/dabot",
    image: "/assets/images/dynamicImages/dabot.png",
  },
  {
    id: "connect4",
    name: "CONNECT4",
    path: "/Connect4",
    image: "/assets/images/dynamicImages/connect4.png",
  },
  {
    id: "tictactoe",
    name: "TICTACTOE",
    path: "/TicTacToe",
    image: "/assets/images/dynamicImages/tictactoe.png",
  },
];

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(0.9);
  const [isRotating, setIsRotating] = useState(true);

  const rotateImage = useCallback(() => {
    setImageOpacity(0);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setImageOpacity(0.9);
  }, []);

  useEffect(() => {
    if (!isRotating) return;

    const intervalId = setInterval(rotateImage, 3000);
    return () => clearInterval(intervalId);
  }, [isRotating, rotateImage]);

  const handleProjectHover = (index: number) => {
    setIsRotating(false);
    setImageOpacity(0);
    setCurrentIndex(index);
    setImageOpacity(0.9);
  };

  const handleProjectLeave = () => {
    setIsRotating(true);
  };

  return (
    <div id="projects">
      <div id="project-work">WORKS</div>
      <div className="projects-container container">
        <div id="dynamic-change">
          <img
            id="dynamic-change-img"
            src={projects[currentIndex].image}
            alt={projects[currentIndex].name}
            style={{
              opacity: imageOpacity,
              transition: "opacity 0.3s ease-in-out",
              width: "100%",
            }}
          />
        </div>
        <div id="projects-title-container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project"
              onMouseEnter={() => handleProjectHover(index)}
              onMouseLeave={handleProjectLeave}
            >
              <Link to={project.path}>
                <div
                  id={project.id}
                  className="projectName"
                  style={{
                    opacity: currentIndex === index ? 0.6 : 1,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  {project.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;