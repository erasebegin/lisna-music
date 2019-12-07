import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import "../styles/Home.css";
import lisnaLogo from "../media/lisna-logo.svg";
import lisnaVideo from "../media/Lisna-compressed.mov";
import lisnaStill from "../media/lisna-still.png";

const Home = () => {
  const [displayContact, setDisplayContact] = useState(true);
  return (
    <div className="container-main">
      <div className="container-home">
        <video
          src={lisnaVideo}
          className="video-bg"
          autoPlay
          loop
          muted
        ></video>
        <div>
          <img src={lisnaLogo} alt="lisna music logo" />
          <nav className="video-overlay">
            <ul>
              <li
                onClick={() => setDisplayContact(!displayContact)}
                style={{ cursor: "pointer" }}
              >
                <span className="nav-link">Contact</span>
              </li>

              <li>
                <a
                  href="https://drive.google.com/drive/folders/1GKoYUmKXi178s0bJHQ2K1jMk-y5gmIq6?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <span className="nav-link">Free Stuff</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.soundcloud.com/lisnamusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <span className="nav-link">Soundcloud</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Contact show={displayContact} />
    </div>
  );
};

export default Home;
