import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="container footer font-primary">
      <div id="made-with">
        Made with 🫀
      </div>
      <div id="footer-privacy-legal">
        <div id="legal-notice">
          <Link to="/legalnotice">Legal Notice</Link>
        </div>
        <div id="privacy-policy">
          <Link to="/privacypolicy">Privacy Policy</Link>
        </div>
      </div>
      {/* <div id="title" onClick={scrollToTop} style={{ cursor: "pointer" }}>
        <img id="footer-logo" src="/assets/logo.png" alt="Back to top" />
      </div> */}
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
