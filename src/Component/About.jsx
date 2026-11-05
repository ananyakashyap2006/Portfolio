import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLaptopCode,
  faPalette,
  faRocket,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  const highlights = [
    {
      icon: faGraduationCap,
      title: "Academic Background",
      desc: "Pursuing Bachelor of Computer Applications (BCA)",
    },
    {
      icon: faLaptopCode,
      title: "Frontend Engineering",
      desc: "React, JavaScript ES6+, HTML5 & Modern CSS",
    },
    {
      icon: faPalette,
      title: "Creative UI/UX",
      desc: "Pixel-perfect, accessible & aesthetic design",
    },
    {
      icon: faRocket,
      title: "Continuous Growth",
      desc: "Eager to explore new frameworks and web tools",
    },
  ];

  return (
    <section className="section about" id="about">
      <div className="section-header">
        <span className="section-badge">Get To Know Me</span>
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-grid">
        <div className="about-bio-card">
          <h3>
            Passionate Developer Building{" "}
            <span className="gradient-text">Modern Web Solutions</span>
          </h3>
          <p>
            Hello! I am <strong>Ananya Kashyap</strong>, a motivated developer
            currently pursuing my{" "}
            <strong>Bachelor of Computer Applications (BCA)</strong>.
          </p>
          <p>
            I specialize in building sleek, responsive, and performance-oriented
            user interfaces. My journey in web development stems from a love for
            transforming creative visual concepts into functional, interactive
            web applications.
          </p>
          <p>
            Whether designing an e-commerce interface, building interactive React
            apps, or refining mobile responsiveness, I focus on clean code,
            intuitive usability, and modern best practices.
          </p>

          <div className="bio-check-list">
            <div className="check-item">
              <span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span>
              <span>Clean & maintainable code structure</span>
            </div>
            <div className="check-item">
              <span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span>
              <span>Fully responsive across all screen sizes</span>
            </div>
            <div className="check-item">
              <span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span>
              <span>Constantly learning and adopting modern tech</span>
            </div>
          </div>

          <div className="about-cta">
            <a href="#skills" className="btn btn-primary">
              Explore My Skills
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="about-cards-wrap">
          {highlights.map((item, index) => (
            <div className="info-card" key={index}>
              <div className="info-icon-box">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="info-card-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
