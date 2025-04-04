import React from "react";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
  const images = [
    {
      src: "/assets/images/aboutGrid/bouldering.jpg",
    },
    {
      src: "/assets/images/aboutGrid/snowboard.jpg",
    },
    {
      src: "/assets/images/aboutGrid/food.jpg",
    },
    {
      src: "/assets/images/aboutGrid/photo.jpg",
    },
    {
      src: "/assets/images/aboutGrid/photo1.jpg",
    },
    {
      src: "/assets/images/aboutGrid/coffe.jpg",
    },
  ];

  return (
    <div id="about">
      <div className="container">
        <div id="about-description-container">
          <div className="subheading-title">WHO'S BEHIND THE CODE?</div>
          <div className="description">
            <b>WILLIAM LU</b>, a software engineer who loves building things
            that make a difference. whether it's games, interactive apps, or
            smart chatbots, the goal is always the same—push boundaries and
            create something that truly stands out.
          </div>

          <div className="subheading-title-lable">CREATIVE.</div>
          <div className="description">
            thinking beyond the code. It's not just about fixing bugs or
            optimizing performance—it's about architecting solutions that are
            efficient, scalable, and built to last.
          </div>

          <div className="subheading-title-lable">PROBLEM SOLVER.</div>
          <div className="description">
            challenges aren't roadblocks—they're puzzles waiting to be solved.
            breaking things down, thinking smarter, and finding the best way
            forward is what it's all about.
          </div>

          <div className="subheading-title-lable">GO GETTER.</div>
          <div className="description">
            fueled by music, fitness, and bouldering. staying active keeps the
            mind sharp, the body strong, and the drive to take on new challenges
            always alive.
          </div>
        </div>
        <div className="profile-pic-container pic-padding-top">
          <div className="photo-grid">
            {images.map((image, index) => (
              <div key={index} className="photo">
                <div className="photo-wrapper">
                  <img src={image.src} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
