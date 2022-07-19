import React from "react";
import "../styles/Contact.css";
import {FaSoundcloud, FaTwitterSquare, FaInstagramSquare, FaEnvelopeSquare} from "react-icons/fa"

function Contact(props) {
  
  return (
    <div
      className={props.show === true ? "container" : "container show-contacts"}
    >
      <div className="banner">
        <a
          href="https://soundcloud.com/lisnamusic"
          target="_blank"
          rel="noopener noreferrer"
        >
          New Tracks on Soundcloud <FaSoundcloud color="white"/>
        </a>
      </div>
      <div className="button-container">
        <a
          href="https://www.twitter.com/lisna_music"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://www.instagram.com/lisna.music"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
        <a href="mailto:music.haupt@gmail.com">
          <FaEnvelopeSquare />
        </a>
        <a
          href="https://www.soundcloud.com/lisnamusic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSoundcloud />
        </a>
      </div>
    </div>
  );
}

export default Contact;
