import React, { useState, useEffect } from "react";
import "./Welcome.css";

const Welcome: React.FC = () => {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const birthDate = new Date("2003-10-05");
    const currentDate = new Date();
    let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  }, []);

  return (
    <div id="start" className="head">
      <video autoPlay loop muted playsInline id="background-video">
        <source src="/assets/videos/welcome.mp4" type="video/mp4" />
      </video>
      <div className="mixBlendMode">
        <h1>
          Developer<p id="commercialand">&</p>
          <br />
          Engineer
        </h1>
        <h2>
          I'm a <i id="head_age"> {age} </i> year old undergraduate student that
          <br />
          is doing his little part on the internet.
          <p id="status">
            <a href="mailto:william.lu514@gmail.com?subject=An Idea Worth Exploring! 🌟">
              Available for Work
            </a>
          </p>
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
