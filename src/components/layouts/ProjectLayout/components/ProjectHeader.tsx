import { useEffect, useRef } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasEndedRef = useRef(false);
  const isMobileRef = useRef(false);

  useEffect(() => {
    if (!isVideoLogo || !videoRef.current) return;

    const video = videoRef.current;
    isMobileRef.current = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    const handleEnded = () => {
      hasEndedRef.current = true;
      video.currentTime = video.duration;
    };

    const handleVisibilityChange = () => {
      if (!isMobileRef.current) return;

      if (document.hidden) {
        video.pause();
      } else if (!hasEndedRef.current) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.currentTime = video.duration;
      }
    };

    video.addEventListener("ended", handleEnded);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    // Force video to play from start on mobile
    if (isMobileRef.current) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isVideoLogo]);

  return (
    <header id="project-logo" className="project-logo" style={backgroundStyles}>
      {isVideoLogo ? (
        <video 
          ref={videoRef}
          id="video" 
          autoPlay 
          muted 
          playsInline
          preload="auto"
        >
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
