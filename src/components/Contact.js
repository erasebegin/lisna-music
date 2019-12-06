import React from "react";
import "../styles/Contact.css";

function Contact(props) {
    console.log(props.show)
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
          New Tracks on Soundcloud
        </a>
      </div>
      <div className="button-container">
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
        <a href="mailto:music.haupt@gmail.com">
          <i className="fas fa-envelope-square" />
        </a>
        <a
          href="https://www.soundcloud.com/lisnamusic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-soundcloud" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
