import React from "react";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <>
      <div className="footer-icon-sidebar">
        <ul className="navbar-nav">
          <li className="nav-item inline-block">
            <a
              href="https://github.com/ritiksingh2"
              aria-label="Github"
              className="nav-link text-github"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>

          <li className="nav-item inline-block">
            <a
              href="https://www.instagram.com/ritik_singh_z/"
              aria-label="Insagram"
              className="nav-link"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="nav-item inline-block">
            <a
              href="https://www.linkedin.com/in/ritik-singh-7867a81b4/"
              aria-label="LinkedIn"
              className="nav-link"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialMedia;
