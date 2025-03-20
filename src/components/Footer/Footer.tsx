import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="container footer font-primary">
      <div id="title">
        <img id="footer-logo" src="/assets/logo.png" alt="Footer Logo" />
      </div>
      <div id="socials" className="container">
        <a
          href="https://github.com/dawillu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            className="social-icon"
            src="/assets/socials/github.svg"
            alt="GitHub Icon"
          />
        </a>
        <a
          href="https://instagram.com/dawillu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img
            className="social-icon"
            src="/assets/socials/instagram.svg"
            alt="Instagram Icon"
          />
        </a>
        <a
          href="https://linkedin.com/in/dawillu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            className="social-icon"
            src="/assets/socials/linkedin.svg"
            alt="LinkedIn Icon"
          />
        </a>
        <a
          href="https://X.com/dawillu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <img
            className="social-icon"
            src="/assets/socials/x.svg"
            alt="X Icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
