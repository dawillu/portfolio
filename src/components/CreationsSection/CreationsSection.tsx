import { Link } from "react-router-dom";
import "./CreationsSection.css";

const CreationsSection: React.FC = () => {
  return (
    <div id="creations">
      <div className="creations">ORIGINAL CREATIONS</div>
      <div className="creations-container">
          <Link className="creations-title" to="/TuesdaysWithMorrie">
            Tuesdays With Morrie <span> book review </span>
          </Link>
          <br />
          <Link className="creations-title" to="https://youtu.be/9PH-Dn7_9tY?feature=shared" target="_blank">
            Agosto <span> august month vlog </span>
          </Link>
      </div>
    </div>
  );
};

export default CreationsSection;
