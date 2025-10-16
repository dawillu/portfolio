import { useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import "./About.css";

const About: React.FC = () => {
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
    {
      src: "/assets/images/aboutGrid/work.jpg",
    },
    {
      src: "/assets/images/aboutGrid/phone.jpg",
    },
    {
      src: "/assets/images/aboutGrid/math.jpg",
    },
  ];

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleDiskClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <Navbar />
      <header id="about-logo" className="about-logo">
        <img src={"/assets/images/about/logo.png"} loading="eager" />
        <div className={`flying-disk ${isPlaying ? "spinning" : ""}`} onClick={handleDiskClick}>
          <img src="/assets/images/about/disk.png" alt="Music disk" />
        </div>
        <audio ref={audioRef} src="/assets/audio/song.mp3" />
      </header>

      <div id="about">
        <div className="container">
          <div id="about-description-container">
            <div className="subheading-title">WHO'S BEHIND THE CODE?</div>
            <div className="description">
              <b>WILLIAM LU</b>, a software engineer who loves building things that make a difference. whether it's games, interactive apps, or smart chatbots, the goal is always the same—push boundaries and create something that truly stands out.
            </div>

            <div className="subheading-title-label">CREATIVE.</div>
            <div className="description">thinking beyond the code. It's not just about fixing bugs or optimizing performance—it's about architecting solutions that are efficient, scalable, and built to last.</div>

            <div className="subheading-title-label">PROBLEM SOLVER.</div>
            <div className="description">challenges aren't roadblocks—they're puzzles waiting to be solved. breaking things down, thinking smarter, and finding the best way forward is what it's all about.</div>

            <div className="subheading-title-label">GO GETTER.</div>
            <div className="description">fueled by music, fitness, and bouldering. staying active keeps the mind sharp, the body strong, and the drive to take on new challenges always alive.</div>
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
      <Footer />
    </>
  );
};

export default About;
