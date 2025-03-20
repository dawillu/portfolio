import { useState } from "react";
import ProjectNavigation from "../../components/layouts/ProjectLayout/components/ProjectNavigation";
import ProjectLayout from "../../components/layouts/ProjectLayout/ProjectLayout";
import ProjectWideDescription from "../../components/layouts/ProjectLayout/components/ProjectWideDescription";
import styles from "./Dabot.module.css";

const Dabot: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const features = [
    ".weather milan",
    ".translate chinese",
    ".museum a great day!",
    ".biblegame",
    ".bibleverse",
  ];

  const handleImageClick = (index: number) => {
    setActiveImage(activeImage === index ? null : index);
  };

  return (
    <>
      <ProjectLayout
        project={{
          title: "dabot",
          logoPath: "src/assets/images/dabot/projectlogo.png",
          year: "2020",
          languages: "JavaScript",
          siteUrl: "https://github.com/dawillu/dabot",
          siteName: "explore the code",
          contentSections: [
            {
              type: "description",
              headTitle: "Your go-to assistant for weather, wisdom, and words.",
              sections: [
                {
                  title: "THE BOT",
                  label: "SMART, ENGAGING, VERSATILE",
                  description:
                    "dabot is a project I started in the early 2020s when COVID first emerged, as Discord became an essential platform during the lockdown. My friends and I were looking for a fun and personalized bot to enhance our experience, so I created dabot. Since then, it has evolved into a versatile tool that not only entertains but also helps users stay informed and connected in a unique way.",
                },
                {
                  title: "APIs",
                  label: "INTEGRATED, DYNAMIC, RESPONSIVE",
                  description:
                    "With its seamless API integration, dabot adapts to user interactions, providing dynamic responses to various needs. Whether users need to check the weather, engage in conversation, or translate messages, the bot is equipped to process requests efficiently, ensuring a smooth and responsive experience for all.",
                },
              ],
            },
            {
              type: "gallery",
              images: ["src/assets/images/dabot/poster.png"],
            },
          ],
          backgroundColor: "#f8eddd",
          backgroundImage: "",
          lightBackground: true,
        }}
      />

      <div id="deep-description-container">
        <ProjectWideDescription
          title="a PERSONAL TOUCH"
          label="CAPTURING, STORING, REVIVING MOMENTS"
          description='The creation of dabot came from a desire to preserve the moments
              that made our group chat special. I built a bot-only-writable
              gallery called the "Museum" to capture photos and videos, turning
              our fleeting memories into something permanent. With a simple
              command, users could embed media, and an API would set the embed
              color to match the dominant tone of the image or video, adding a
              nostalgic, personal touch. What started as a fun way to relive
              memories quickly became a virtual museum where we could visit the
              past and keep those moments alive.'
        />

        <div className={styles.picturePile}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className={`${styles.pileImage} ${
                activeImage === index ? styles.active : ""
              }`}
              onClick={() => handleImageClick(index)}
              style={{
                backgroundImage: `url('src/assets/images/dabot/pile/${
                  index + 1
                }.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        <ProjectWideDescription
          title="COMMAND LIST"
          label="EXPLORE THE POSSIBILITIES"
          description='dabot responds to various commands, each designed to enhance your
              Discord experience. From weather updates to translations, every
              command is crafted for seamless interaction.'
        />

        <div className={styles.scatteredContainer} data-animation="fade-in">
          {features.map((feature, index) => (
            <div key={index} className={styles.scatteredElement}>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <ProjectNavigation nextPath="/Connect4" />
    </>
  );
};

export default Dabot;
