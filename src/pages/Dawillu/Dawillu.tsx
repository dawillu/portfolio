import ProjectNavigation from "../../components/layouts/ProjectLayout/components/ProjectNavigation/ProjectNavigation";
import ProjectLayout from "../../components/layouts/ProjectLayout/ProjectLayout";
import ProjectWideDescription from "../../components/layouts/ProjectLayout/components/ProjectDescription/ProjectWideDescription";
import styles from "./Dawillu.module.css";

const Dawillu: React.FC = () => {
  const features = [
    { text: "React + TypeScript", type: "stack" },
    { text: "Vite Build System", type: "stack" },
    { text: "CSS Modules", type: "design" },
    { text: "React Router v6", type: "stack" },
    { text: "Scroll Animations", type: "design" },
    { text: "Video Logo Header", type: "design" },
    { text: "Responsive Layout", type: "design" },
    { text: "Vercel Deployment", type: "deploy" },
  ];

  const stats = [
    { value: "∞", label: "versions planned" },
    { value: "1", label: "developer" },
    { value: "0", label: "compromises on design" },
    { value: "2024", label: "year it began" },
  ];

  const versions = [
    {
      tag: "v0.1",
      label: "THE SPARK",
      description: "A blank Vite project and a vision. Nothing but a dark background and ambition.",
    },
    {
      tag: "v0.5",
      label: "FIRST SHAPE",
      description: "The ProjectLayout system was born. One reusable shell to rule all future pages.",
    },
    {
      tag: "v1.0",
      label: "GOES LIVE",
      description: "First deploy to Vercel. The portfolio had a heartbeat. Real URL, real stakes.",
    },
  ];

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
                  description: `It all started with my name, William Lu, but the trend of adding "the" before names gave it a new twist. WILLU came to life—shorter, sharper, and cooler. Then daWILLU followed, making it personal. Now, you'll find me everywhere—across every social, with this name. It's more than just a name. It's a story.`,
                },
                {
                  title: "THE PORTFOLIO",
                  label: "ABSOLUTE WAY OF EXPRESSION",
                  description: `Started in mid-2024, this project is a lifetime commitment to evolve as one of my favorite ways of expressing myself. Each piece not only reflects my personal style and vision but also integrates problem-solving, structure, and a technical approach that comes from my engineering background. This portfolio is about more than just artistic expression.`,
                },
              ],
            },
          ],
          backgroundColor: "black",
          backgroundImage: "",
          lightBackground: false,
        }}
      />

      <div id="deep-description-container">

        <div className={styles.metaCallout} data-animation="fade-in">
          <span className={styles.metaTag}>dawillu</span>
          You are currently inside the portfolio, reading about the portfolio.
          <br />
          <span className={styles.metaSub}>This page was built with the same system it describes.</span>
        </div>

        <ProjectWideDescription
          title="DESIGN PHILOSOPHY"
          label="MINIMAL, INTENTIONAL, PERSONAL"
          description="Every detail of this portfolio was crafted with intention—from the dark background that lets content breathe, to the subtle scroll-triggered animations that reward curiosity. The typography, spacing, and motion all serve a single goal: let the work speak without noise."
        />

        <div className={styles.statsRow}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem} data-animation="fade-in">
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <ProjectWideDescription
          title="TECH STACK"
          label="BUILT FOR PERFORMANCE AND SCALABILITY"
          description="Built with React and TypeScript for a type-safe, component-driven architecture. Vite powers the build pipeline for near-instant HMR and optimized production bundles. CSS Modules scope styles per component, preventing leakage and keeping the codebase maintainable as it grows."
        />

        <div className={styles.scatteredContainer}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.scatteredElement}
              data-feature={feature.type}
              data-animation="fade-in"
            >
              {feature.text}
            </div>
          ))}
        </div>

        <ProjectWideDescription
          title="ARCHITECTURE"
          label="REUSABLE LAYOUTS AND SHARED COMPONENTS"
          description="Each project page is powered by a shared ProjectLayout system — a single source of truth for headers, descriptions, galleries, and animations. Adding a new project means composing existing components, not rewriting logic. The layout handles scroll-based color switching, intersection observer animations, and document title management automatically."
        />

        <div className={styles.timelineContainer}>
          {versions.map((v, i) => (
            <div key={i} className={styles.timelineItem} data-animation="fade-in">
              <div className={styles.timelineTag}>{v.tag}</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineLabel}>{v.label}</div>
                <div className={styles.timelineDesc}>{v.description}</div>
              </div>
            </div>
          ))}
        </div>

        <ProjectWideDescription
          title="CONTINUOUS EVOLUTION"
          label="A LIVING, BREATHING PROJECT"
          description="This portfolio isn't finished — and it never will be. New projects get added, old sections get refined, and the visual language evolves alongside my taste and skills. It's versioned, deployed on Vercel with zero-config CI, and iterated on whenever inspiration strikes. The best portfolios are never done."
        />

        <div className={styles.closingQuote} data-animation="fade-in">
          "Build it like no one's watching. Ship it like everyone is."
        </div>

      </div>

      <ProjectNavigation nextPath="/LifeAtPark" />
    </>
  );
};

export default Dawillu;