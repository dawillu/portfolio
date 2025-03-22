import { useState } from "react";
import ProjectNavigation from "../../components/layouts/ProjectLayout/components/ProjectNavigation";
import ProjectLayout from "../../components/layouts/ProjectLayout/ProjectLayout";
import ProjectWideDescription from "../../components/layouts/ProjectLayout/components/ProjectWideDescription";
import styles from "./Dabot.module.css";

const Dabot: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const features = [
    { text: ".museum a great day!", type: "museum" },
    { text: ".weather milan", type: "weather" },
    { text: ".translate chinese", type: "translate" },
    { text: ".biblegame", type: "bible" },
    { text: ".bibleverse", type: "bible" },
  ];

  const handleImageClick = (index: number) => {
    setActiveImage(activeImage === index ? null : index);
  };

  return (
    <>
      <ProjectLayout
        project={{
          title: "dabot",
          logoPath: "/assets/images/dabot/projectlogo.png",
          year: "2020 - Present",
          languages: "JavaScript",
          siteUrl: "https://github.com/dawillu/dabot",
          siteName: "Explore the Code",
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
              images: ["/assets/images/dabot/poster.png"],
            },
          ],
          backgroundColor: "#f8eddd",
          backgroundImage: "/assets/images/dabot/background.jpg",
          lightBackground: true,
        }}
      />

      <div id="deep-description-container">
        <ProjectWideDescription
          title="A PERSONAL TOUCH"
          label="CAPTURING, STORING, REVIVING MOMENTS"
          description='dabot was created years ago with one simple idea: to hold onto the moments that made our discord channel "Teverna Ammuffita" special. A bot-only gallery, called the "Museum," was built to capture photos and videos, turning those fleeting memories into something permanent. With just a simple command, users could embed media, and an API would pick up on the dominant color of the image or video, giving each post a nostalgic, personal touch. What began as a fun way to relive moments quickly grew into a virtual museum, where the group could go back and keep those cherished memories alive, even as time moved on.'
        />

        <div className={styles.picturePile}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className={`${styles.pileImage} ${
                activeImage === index ? styles.active : ""
              }`}
              data-animation="fade-in"
              onClick={() => handleImageClick(index)}
              style={{
                backgroundImage: `url('/assets/images/dabot/pile/${
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
          description="dabot responds to various commands, each designed to enhance your
              Discord experience. From weather updates to translations, every
              command is crafted for seamless interaction."
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
      </div>

      <ProjectNavigation nextPath="/connect4" />
    </>
  );
};

export default Dabot;
