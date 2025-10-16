import React, { useState, useEffect, useCallback } from "react";
import "./ProjectSection.css";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  name: string;
  hoverText?: string;
  hoverTextTop?: string;
  path: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "dawillu",
    name: "DAWILLU",
    hoverText: "portfolio",
    hoverTextTop: "React - TypeScript - CSS",
    path: "/dawillu",
    image: "/assets/images/dynamicImages/dawillu.png",
    link: "/dawillu",
  },
  {
    id: "galaxytrucker",
    name: "GALAXY TRUCKER",
    hoverText: "adventure game",
    hoverTextTop: "Java / JavaFX / OOP",
    path: "/GalaxyTrucker",
    image: "/assets/images/dynamicImages/galaxytrucker.png",
    link: "/GalaxyTrucker",
  },
  {
    id: "dabot",
    name: "DABOT",
    hoverText: "discord chatbot",
    hoverTextTop: "JavaScript / Node.js / Discord.js",
    path: "/dabot",
    image: "/assets/images/dynamicImages/dabot.png",
    link: "/dabot",
  },
  {
    id: "connect4",
    name: "CONNECT4",
    hoverText: "classic connect four game",
    hoverTextTop: "C# / HTML / JS / CSS",
    path: "/Connect4",
    image: "/assets/images/dynamicImages/connect4.png",
    link: "/Connect4",
  },
  {
    id: "tictactoe",
    name: "TICTACTOE",
    hoverText: "simple tic tac toe game",
    hoverTextTop: "HTML / JS / CSS",
    path: "/TicTacToe",
    image: "/assets/images/dynamicImages/tictactoe.png",
    link: "/TicTacToe",
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
      <div id="project-work">creating since 2020</div>
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
              <Link
                to={project.link}
                className="projectName"
                data-hover-text={project.hoverText}
                data-hover-text-top={project.hoverTextTop}
              >
                {project.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;