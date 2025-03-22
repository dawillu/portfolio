import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import "./ProjectLayout.css";
import ProjectHeader from "./components/ProjectHeader";
import ProjectDescription from "./components/ProjectDescription";
import ProjectGallery from "./components/ProjectGallery";

interface Section {
  title: string;
  label: string;
  description: string;
}

interface ContentSection {
  type: "description" | "gallery";
  headTitle?: string;
  sections?: Section[];
  images?: string[];
}

interface ProjectInfo {
  title: string;
  logoPath: string;
  isVideoLogo?: boolean;
  year: string;
  languages: string;
  siteUrl: string;
  siteName: string;
  contentSections: ContentSection[];
  backgroundColor?: string;
  backgroundImage?: string;
  lightBackground?: boolean;
}

interface ProjectLayoutProps {
  project: ProjectInfo;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ project }) => {
  useEffect(() => {
    document.title = `${project.title} · dawillu`;

    const elements = document.querySelectorAll<HTMLElement>("[data-animation]");
    elements.forEach((el) => (el.style.visibility = "hidden"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animation = entry.target.getAttribute("data-animation");
            if (animation) {
              entry.target.classList.add(animation);
              (entry.target as HTMLElement).style.visibility = "visible";
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "50px 0px 0px 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [project.title]);

  useEffect(() => {
    if (!project.lightBackground) return;
    const textElement = document.getElementById("nav-logo");
    const projectInfo = document.getElementById("link-info");
    const arrow = document.getElementById("arrow");
    if (textElement) textElement.classList.add("light");
    if (projectInfo) projectInfo.style.color = "#1a191a";
    if (arrow) arrow.style.borderTopColor = "black";

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (textElement) {
        if (scrollPosition > window.innerHeight * 0.97) {
          textElement.classList.add("dark");
          textElement.classList.remove("light");
        } else {
          textElement.classList.remove("dark");
          textElement.classList.add("light");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [project.lightBackground]);

  const backgroundStyles = {
    backgroundColor: project.backgroundColor,
    ...(project.backgroundImage && {
      backgroundImage: `url(${project.backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
  };

  return (
    <>
      <Navbar />
      <ProjectHeader
        title={project.title}
        logoUrl={project.logoPath}
        isVideoLogo={project.isVideoLogo}
        year={project.year}
        languages={project.languages}
        siteUrl={project.siteUrl}
        siteName={project.siteName}
        backgroundStyles={backgroundStyles}
      />

      {project.contentSections.map((section, index) => (
        <React.Fragment key={index}>
          {section.type === "description" && section.sections && (
            <ProjectDescription
              headTitle={section.headTitle || ""}
              sections={section.sections}
            />
          )}
          {section.type === "gallery" && section.images && (
            <ProjectGallery images={section.images} title={project.title} />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default ProjectLayout;
