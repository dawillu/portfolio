import { Link } from "react-router-dom";
import "./CreationsSection.css";

const CreationsSection: React.FC = () => {
  return (
    <div id="creations">
      <div className="creations">ORIGINAL CREATIONS</div>
      <div className="creations-container">
        <div className="write-title">
          <Link to="/TuesdaysWithMorrie">
            Tuesdays With Morrie <span> review of a book by Mitch Albom </span>
          </Link>
          <br />
          <Link to="">
            Agosto <span> august month vlog recap </span>
          </Link>
          <br />
          <Link to="">
            New Content <span> cooming soon </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreationsSection;
