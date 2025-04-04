import { Link } from "react-router-dom";

import './ProjectNavigation.css'

interface ProjectNavigationProps {
  nextPath: string;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ nextPath }) => {
  return (
    <Link to={nextPath}>
      <div className="next-project">
        <div className="next-project-label">Next Project</div>
        <div className="next-project-arrow"></div>
      </div>
    </Link>
  );
};

export default ProjectNavigation;
