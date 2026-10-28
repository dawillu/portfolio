import { useState } from "react";
import ProjectDescription from "../../components/layouts/ProjectLayout/components/ProjectDescription/ProjectDescription";
import ProjectWideDescription from "../../components/layouts/ProjectLayout/components/ProjectDescription/ProjectWideDescription";
import ProjectGallery from "../../components/layouts/ProjectLayout/components/ProjectGallery/ProjectGallery";
import ProjectNavigation from "../../components/layouts/ProjectLayout/components/ProjectNavigation/ProjectNavigation";
import ProjectLayout from "../../components/layouts/ProjectLayout/ProjectLayout";
import styles from "./LifeAtPark.module.css";

const LifeAtPark: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const teamMembers = [
    { name: "Tommaso Bazzanella", src: "assets/images/lifeAtPark/team/tommaso.png" },
    { name: "William Lu", src: "assets/images/lifeAtPark/team/william.png" },
    { name: "Ayrton Serafini", src: "assets/images/lifeAtPark/team/ayrton.png" },
    { name: "Giorgio Ortona", src: "assets/images/lifeAtPark/team/giorgio.png" },
    { name: "Samuele Succetti", src: "assets/images/lifeAtPark/team/samuele.png" },
    { name: "Rayan Zaman Mohammad", src: "assets/images/lifeAtPark/team/rayan.png" },
  ];

  const features = [
    { text: "HW 1 - needfinding, analysis, synthesis", type: "", link: "https://github.com/dawillu/HCIproject-FillYourDay/tree/master/C1" },
    { text: "HW 2 - refinement and project focus", type: "", link: "https://github.com/dawillu/HCIproject-FillYourDay/tree/master/C2" },
    { text: "HW 3 - task, storyboard and early prototypes", type: "", link: "https://github.com/dawillu/HCIproject-FillYourDay/tree/master/C3" },
    { text: "HW 4 - medium-fidelity prototypes", type: "", link: "https://github.com/dawillu/HCIproject-FillYourDay/tree/master/C4" },
    { text: "HW 5 - usability evaluation", type: "", link: "https://github.com/dawillu/HCIproject-FillYourDay/tree/master/C5" },
    { text: "HW 6 - high fidelity prototype and usability testing", type: "", link: "https://github.com/dawillu/HCIproject-FillYourDay/tree/master/C6" },
  ];
  
  return (
    <>
      <ProjectLayout
        project={{
          title: "Life@Park",
          logoPath: "/assets/images/lifeAtPark/projectlogo.png",
          isVideoLogo: false,
          year: "2025 - 2026",
          languages: "Figma / UX Research", 
          siteUrl: "https://github.com/dawillu/HCIproject-FillYourDay",
          siteName: "Explore the Project",
          contentSections: [
            {
              type: "description",
              headTitle: "FIND AND ENJOY YOUR PARK WITHOUT A WORRY",
              sections: [
                {
                  title: "THE PROBLEM & VISION",
                  label: "BRIDGING THE GAP TO GREEN SPACES",
                  description: `Urban citizens often feel disconnected from their local green spaces due to a lack of information and community. Life@Park was engineered to transform static parks into dynamic hubs for physical activity and social connection, ensuring that every visit adds value to a user's health and lifestyle.`,
                },
                {
                  title: "THE PLATFORM",
                  label: "INTUITIVE SMARTPHONE EXPERIENCE",
                  description: `Leveraging a mobile-first approach, Life@Park puts the city's green infrastructure in the user's pocket. Our high-fidelity solution features real-time equipment filtering, interactive trail mapping, and a social coordination layer that allows users to seamlessly join community events or organize activities with friends.`,
                },
              ],
            },
          ],
          backgroundColor: "#f9f7f0",
          backgroundImage: "",
          lightBackground: true,
        }}
      />
      <div id="deep-description-container">
        <div className={styles.teamContainer}>Meet the Team</div>
        <div className={styles.teamSection}>
          <div className={styles.grid}>
            {teamMembers.map((member) => (
              <div className={styles.cell} key={member.name}>
                <img
                  src={member.src}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.nameOverlay}>{member.name}</div>
              </div>
            ))}
          </div>
        </div>
        <ProjectWideDescription
          title="THE TEAM'S INSIGHT"
          label="DESIGNING FOR COMMUNITY ENGAGEMENT"
          description="Our multidisciplinary team combined expertise in UX design, human-computer interaction, and community engagement to create Life@Park. We focused on understanding user needs through research and iterative design, ensuring the app fosters social interaction and promotes active lifestyles in urban green spaces."
        />

        <ProjectGallery
          images={[
            "assets/images/lifeAtPark/ppt/ppt1.png",
            "assets/images/lifeAtPark/ppt/ppt2.png",
            "assets/images/lifeAtPark/ppt/ppt3.png",
          ]}
        />
        <div className={styles.galleryButtonContainer}>
          <button 
            className={styles.openGalleryButton} 
            onClick={() => setIsGalleryOpen(true)}
          >
            View All Slides
          </button>
        </div>

        {isGalleryOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsGalleryOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.closeButtonContainer}>
                <button 
                  className={styles.closeButton} 
                  onClick={() => setIsGalleryOpen(false)}
                >
                  ✕
                </button>
              </div>
              <ProjectGallery
                images={[
                  ...Array.from({ length: 62 }, (_, i) => `assets/images/lifeAtPark/ppt/${i + 2}.png`)
                ]}
              />
            </div>
          </div>
        )}

        <div className={styles.divider}></div>

        <div data-animation="grow" className={styles.center}>
            TRY THE PROTOTYPE NOW
        </div>
        <a href="https://www.figma.com/proto/Hn1FlwLxKqbrMCmRIRjlF2/Prototipo-high-fidelity?node-id=0-1&t=Ry4JKZDZ5DIN4eQY-1" target="_blank" rel="noopener noreferrer">
          <div className={styles.prototypeImg}>
            <img data-animation="down-up" src="/assets/images/lifeAtPark/prototype1.png" alt="" loading="lazy" decoding="async" />
            <img data-animation="down-up" src="/assets/images/lifeAtPark/prototype2.png" alt="" loading="lazy" decoding="async" />
            <img data-animation="down-up" src="/assets/images/lifeAtPark/prototype3.png" alt="" loading="lazy" decoding="async" />
          </div>
        </a>

        <ProjectWideDescription
          title="VOICE OF THE CITIZEN"
          label="UNDERSTANDING THE URBAN DISCONNECT"
          description="To build a truly inclusive solution, we expanded our research beyond institutional borders to a diverse demographic of urban citizens. Our survey revealed a universal tension: while parks are highly valued, barriers such as safety concerns, lack of real-time facility data, and 'social friction' prevent daily engagement. This broad data set validated Life@Park as a vital tool for anyone—from students to professionals—seeking to reclaim their city's green spaces."
        />

        <div className={styles.survey}>
          <div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4YDRMrtARfVPhlR8FwKlLJ66sy3SC5on4Ehehqk1Ivn9Xyw/viewform?usp=dialog" target="_blank">
              <img
                data-animation="fade-in-right"
                src="/assets/images/lifeAtPark/survey.png"
                alt="Survey results"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>

      <ProjectDescription
        headTitle="ACADEMIC PROJECT FRAMEWORK"
        sections={[
          {
            title: "PHASE 1: NEED FINDING & ANALYSIS",
            label: "HW1 & HW2 DELIVERABLES",
            description: `In alignment with FHCI requirements, our project began with rigorous need-finding and user research (HW1). We focused on thematic analysis to synthesize qualitative data, which led to the refinement of our project focus and the creation of detailed user personas and interaction scenarios (HW2).`
          },
          {
            title: "PHASE 2: PROTOTYPING & EVALUATION",
            label: "HW3 TO HW6 DELIVERABLES",
            description: `Following the course roadmap, we moved from low-fidelity task analysis and storyboarding (HW3) to a medium-fidelity interactive prototype (HW4). The final stage involves expert-based heuristic evaluation (HW5) and high-fidelity usability testing to ensure the interface meets professional HCI standards before final delivery (HW6).`
          },
        ]}
      />

      <div id="deep-description-container">
        <div className={styles.scatteredContainer}>
          {features.map((feature, index) => (
            <a key={index} href={feature.link} target="_blank" rel="noopener noreferrer">
              <div
                className={styles.scatteredElement}
                data-feature={feature.type}
                data-animation="fade-in"
              >
                {feature.text}
              </div>
            </a>
          ))}
        </div>
      </div>

      <ProjectNavigation nextPath="/AirRoutes" />
    </>
  );
};

export default LifeAtPark;