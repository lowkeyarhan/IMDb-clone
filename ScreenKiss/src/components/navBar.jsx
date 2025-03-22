import "../styles/navBar.css";
import React from "react";
import Logo from "../assets/film-projector-icon-2048x2048-7cuzbiwu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function navBar() {
  return (
    <div className="nav">
      <div className="left_items">
        <img src={Logo} alt="" />
        <h1>Trending</h1>
        <h1>Watchlist</h1>
        <h1>Favourites</h1>
      </div>
      <div className="right_items">
        <a
          href="https://github.com/lowkeyarhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a
          href="https://linkedin.com/in/imnotarhannnnn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
    </div>
  );
}

export default navBar;
