import React, { useEffect } from "react";
import "./Loader.css";

const Loader: React.FC = () => {
  useEffect(() => {
    const loaderContainer = document.getElementById("loader-container");
    const content = document.getElementById("content");

    setTimeout(() => {
      if (loaderContainer) loaderContainer.style.display = "none";
      if (content) {
        content.style.display = "block";
        setTimeout(() => content.classList.add("show"), 50);
      }
    }, 2000);
  }, []);

  return (
    <div id="loader-container">
      <div id="loader"></div>
    </div>
  );
};

export default Loader;
