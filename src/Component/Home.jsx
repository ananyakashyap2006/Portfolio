import images from "../assets/images1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight, faCode, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            Available for Opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Ananya Kashyap</span>
            <br />
            <span className="hero-subtitle">Frontend Web Developer</span>
          </h1>

          <p className="hero-desc">
            A passionate developer and BCA student dedicated to crafting clean,
            responsive, and user-centric websites. I turn creative ideas into
            fast, dynamic digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Let's Talk <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a href="#project" className="btn btn-outline">
              <FontAwesomeIcon icon={faLayerGroup} /> View Projects
            </a>
          </div>

          <div className="hero-social-wrap">
            <span className="social-label">Connect with me:</span>
            <div className="social-icons">
              <a
                href="https://github.com/ananyakashyap2006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/ananyakashyap2006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://x.com/AnanyaKashpvvs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="mailto:ananyakashyap344@gmail.com"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="avatar-glow"></div>
          <div className="avatar-frame">
            <img src={images} alt="Ananya Kashyap" className="avatar-img" />
          </div>
          <div className="floating-badge badge-top">
            <FontAwesomeIcon icon={faCode} className="badge-icon" />
            <span>React Developer</span>
          </div>
          <div className="floating-badge badge-bottom">
            <span>🚀 100% Responsive</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
