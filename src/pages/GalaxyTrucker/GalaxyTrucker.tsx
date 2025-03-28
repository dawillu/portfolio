import ProjectNavigation from "../..//components/layouts/ProjectLayout/components/ProjectNavigation";
import ProjectWideDescription from "../../components/layouts/ProjectLayout/components/ProjectWideDescription";
import ProjectLayout from "../../components/layouts/ProjectLayout/ProjectLayout";

const GalaxyTrucker: React.FC = () => {
  return (
    <>
      <ProjectLayout
        project={{
          title: "galaxy trucker",
          logoPath: "/assets/images/galaxyTrucker/projectlogo.png",
          year: "2025 - Present",
          languages: "JAVA",
          siteUrl: "",
          siteName: "Explore Code",
          contentSections: [
            {
              type: "description",
              headTitle: "4 Minds, 1 Goal - Excellence in Replication.",
              sections: [],
            },
            // {
            //   type: "gallery",
            //   images: ["/assets/images/connect4/poster.png"],
            // },
          ],
          backgroundImage: "/assets/images/galaxyTrucker/background.jpg",
          lightBackground: false,
        }}
      />
      <div id="deep-description-container">
        <ProjectWideDescription
          title="GALAXY TRUCKER replication TEAM"
          label="COOMING SOON..."
          description=''
        />
      </div>
      
      <ProjectNavigation nextPath="/dabot" />
    </>
  );
};

export default GalaxyTrucker;
