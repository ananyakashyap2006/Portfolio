import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUp, faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-wrap">
              <img src={logo} alt="Ananya Logo" className="footer-logo" />
              <span className="brand-name">
                Ananya<span>.dev</span>
              </span>
            </div>
            <p className="footer-tagline">
              Crafting modern, accessible, and high-performance digital experiences.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#project">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-social-col">
            <h4>Connect</h4>
            <div className="footer-social-icons">
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

        <div className="footer-bottom">
          <p>
            Designed & Built with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by{" "}
            <strong>Ananya Kashyap</strong> • © {new Date().getFullYear()} All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
            title="Scroll to Top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
