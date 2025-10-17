import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="notch-cover">
        <nav id="nav">
          <div id="left-nav">
            <a href="/" className="logo">
              <div className="icon container">
                <img id="nav-logo" src="/assets/logo.png" alt="Logo" />
              </div>
            </a>
          </div>

            <div id="right-nav" className="container">
              <div>
                <ul className="menu font-primary">
                  <li>
                    <ScrollLink
                      to="projects"
                      smooth={true}
                      duration={700}
                      className="menulink"
                    >
                      projects,
                    </ScrollLink>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="menulink"
                    >
                      about,
                    </a>
                  </li>
                  <li>
                    <ScrollLink
                      to="creations"
                      smooth={true}
                      duration={700}
                      className="menulink"
                    >
                      creations
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
