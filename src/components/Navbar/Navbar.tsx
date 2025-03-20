import React from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

          {isHomePage && (
            <div id="right-nav" className="container">
              <div>
                <ul className="menu font-primary">
                  <li>
                    <Link
                      to="projects"
                      smooth={true}
                      duration={700}
                      className="menulink"
                    >
                      projects,
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      smooth={true}
                      duration={700}
                      className="menulink"
                    >
                      about,
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      smooth={true}
                      duration={700}
                      className="menulink"
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
