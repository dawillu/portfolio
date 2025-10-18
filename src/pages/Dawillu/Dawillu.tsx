import ProjectNavigation from "../../components/layouts/ProjectLayout/components/ProjectNavigation/ProjectNavigation";
import ProjectLayout from "../../components/layouts/ProjectLayout/ProjectLayout";

import "./Dawillu.css";

const Dawillu: React.FC = () => {
  return (
    <>
      <ProjectLayout
        project={{
          title: "dawillu",
          logoPath: "/assets/images/dawillu/projectlogo.mp4",
          isVideoLogo: true,
          year: "2024 - Present",
          languages: "React TS CSS",
          siteUrl: "https://dawillu.vercel.app/",
          siteName: "Visit Portfolio",
          contentSections: [
            {
              type: "description",
              headTitle:
                "My coding is like a story—full of mistakes, rewrites, and unexpected twists, but always pushing to find the plot",
              sections: [
                {
                  title: "ORIGIN OF THE NAME",
                  label: "the WILLIAM LU, theWILLU, daWILLU",
                  description: `It all started with my name, William Lu, but the trend of adding “the” before names gave it a new twist. WILLU came to life—shorter, sharper, and cooler. Then daWILLU followed, making it personal. Now, you'll find me everywhere—across every social, with this name. It's more than just a name. It's a story.`,
                },
                {
                  title: "THE PORTFOLIO",
                  label: "ABSOLUTE WAY OF EXPRESSION",
                  description: `Started in mid-2024, this project is a lifetime commitment to evolve as one of my favorite ways of expressing myself. Each piece not only reflects my personal style and vision but also integrates problem-solving, structure, and a technical approach that comes from my engineering background. This portfolio is about more than just artistic expression.`,
                },
              ],
            },
            // {
            //   type: "gallery",
            //   images: ["/assets/images/connect4/poster.png"],
            // },
          ],
          backgroundColor: "black",
          backgroundImage: "",
          lightBackground: false,
        }}
      />
      <ProjectNavigation nextPath="/AirRoutes" />
    </>
  );
};

export default Dawillu;
