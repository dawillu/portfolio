import { Link } from "react-scroll";

interface ProjectHeaderProps {
  title: string;
  logoUrl: string;
  isVideoLogo?: boolean;
  year: string;
  languages: string;
  siteUrl: string;
  siteName: string;
  backgroundStyles?: React.CSSProperties;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  logoUrl,
  isVideoLogo,
  year,
  languages,
  siteUrl,
  siteName,
  backgroundStyles,
}) => {
  return (
    <header id="project-logo" className="project-logo" style={backgroundStyles}>
      {isVideoLogo ? (
        <video id="video" autoPlay muted playsInline>
          <source src={logoUrl} type="video/mp4" />
        </video>
      ) : (
        <img src={logoUrl} alt={`${title} logo`} loading="eager" />
      )}

      <div id="link-info">
        <div>
          <span>Year</span>
          <br />
          {year}
        </div>
        <div>
          <span>Language</span>
          <br />
          {languages}
        </div>
        <div>
          <span>Site</span>
          <br />
          <a
            className="project-link"
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${siteName}`}
          >
            {siteName}
          </a>
        </div>
      </div>
      <Link
        to="description-container"
        smooth={true}
        duration={1000}
        className="arrow"
        id="arrow"
        aria-hidden="true"
      ></Link>
    </header>
  );
};

export default ProjectHeader;
