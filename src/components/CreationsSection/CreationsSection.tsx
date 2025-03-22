import { Link } from "react-router-dom";
import "./CreationsSection.css";

const CreationsSection: React.FC = () => {
  return (
    <>
      <div id="creations">ORIGINAL CREATIONS</div>
      <div className="creations-container">
        <div className="write-title">
          <Link to="">
            Thuesdays With Morrie <span> review of a book by Mitch Albom </span>
          </Link>
          <br />
          <Link to="">
            My August <span> a monthly vlog recap </span>
          </Link>
          <br />
          <Link to="">
            New Content <span> cooming soon </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreationsSection;
