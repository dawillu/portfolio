import './ProjectDescription.css'

interface Section {
  title: string;
  label: string;
  description: string;
}

const ProjectWideDescription: React.FC<Section> = ({
  title,
  label,
  description,
}) => {
  return (
    <div className="description-div container">
      <div style={{ width: "90%" }} data-animation="fade-in">
        <div className="subheading-title">{title}</div>
        <div className="subheading-title-label">{label}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default ProjectWideDescription;
