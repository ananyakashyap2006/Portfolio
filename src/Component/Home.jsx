import React from "react";
import "../App.css";
import images from "../assets/images1.png";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
}from "@fortawesome/free-brands-svg-icons";
function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-image">
        <img src={images} alt="Profile" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_right" />
      </div>
    <div className="hero-content">
        <span className="hello">Hello ,</span>
        <h1>
         I am <span>Ananya Kashyap</span><br/>
                 <span>Web Developer</span>
        </h1>
        <p>
         A passionate web developer who loves creating modern, responsive, and user-friendly websites. I enjoy learning new technologies and turning ideas into creative digital experiences.
        </p>
        <button className="talk-btn">Let's Talk</button> 
        <div className="social-icons">
        <a href ="https://github.com/ananyakashyap2006" target="_blank">
          <FontAwesomeIcon icon={faGithub} /></a>
          <a href ="https://www.linkedin.com/in/ananyakashyap2006" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} /></a>
          <a  href ="https://x.com/AnanyaKashpvvs" target="_blank">
        <FontAwesomeIcon icon={faTwitter} /></a>
      </div>
      </div>
      
    </section>
  );
}

export default Home;