import { Link } from "react-router-dom";
import "./CreationsSection.css";

const CreationsSection: React.FC = () => {
  return (
    <div id="creations">
      <div className="creations">ORIGINAL CREATIONS</div>
      <div className="creations-container">
          <Link className="creations-title" to="/TuesdaysWithMorrie">
            Tuesdays With Morrie <span> review of a book by Mitch Albom </span>
          </Link>
          <br />
          <Link className="creations-title" to="">
            Agosto <span> august month vlog recap </span>
          </Link>
          <br />
          <Link className="creations-title" to="">
            New Content <span> cooming soon </span>
          </Link>
      </div>
    </div>
  );
};

export default CreationsSection;
