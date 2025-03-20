interface Section {
  title: string;
  label: string;
  description: string;
}

interface ProjectDescriptionProps {
  headTitle?: string;
  sections: Section[];
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  headTitle,
  sections,
}) => {
  return (
    <main
      id="description-container"
      className={!headTitle ? "no-header-padding" : ""}
    >
      {headTitle && (
        <div className="head-title" data-animation="fade-in">
          {headTitle}
        </div>
      )}
      <div className="description-div container">
        {sections.map((section, index) => (
          <div
            key={index}
            data-animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}
          >
            <div className="subheading-title">{section.title}</div>
            <div
              className="subheading-title-label"
              data-animation={
                index % 2 === 0 ? "fade-in-left" : "fade-in-right"
              }
            >
              {section.label}
            </div>
            <div className="description">{section.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectDescription;
