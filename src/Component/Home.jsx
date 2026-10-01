import React from "react";
import "../App.css";
import images from "../assets/images1.png";

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
         I am <span>Ananya </span><br/>
                 <span>Web Designer...... </span>
        </h1>
        <p>
          Lorem ipsum is a standard placeholder or dummy 
          text widely used in graphic design, web development,
          and publishing to preview layouts. 
        </p>

        <button className="talk-btn">Let's Talk</button>
      </div>
    </section>
  );
}

export default Home;