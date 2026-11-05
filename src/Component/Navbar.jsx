import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <a href="#home" className="nav-brand" onClick={closeMenu}>
          <img src={logo} alt="Ananya Logo" id="logo" />
          <span className="brand-name">Ananya<span>.dev</span></span>
        </a>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#project" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="nav-cta-mobile" onClick={closeMenu}>Let's Talk</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="nav-cta-btn">Let's Talk</a>
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
