import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPaperPlane,
  faLocationDot,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending with instant feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-header">
        <span className="section-badge">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Have an opportunity, question, or want to collaborate on a project?
          Feel free to reach out anytime!
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-col">
          <h3>Let's talk about everything!</h3>
          <p className="contact-intro">
            Whether you have an inquiry, feedback on my projects, or an exciting
            internship or junior role, my inbox is always open.
          </p>

          <div className="contact-cards">
            <a
              href="mailto:ananyakashyap344@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <span className="contact-card-label">Email Me</span>
                <span className="contact-card-val">
                  ananyakashyap344@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ananyakashyap2006"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div>
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-val">ananyakashyap2006</span>
              </div>
            </a>

            <a
              href="https://github.com/ananyakashyap2006"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div>
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-val">ananyakashyap2006</span>
              </div>
            </a>

            <a
              href="https://x.com/AnanyaKashpvvs"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div>
                <span className="contact-card-label">Twitter / X</span>
                <span className="contact-card-val">@AnanyaKashpvvs</span>
              </div>
            </a>

            <div className="contact-card static-card">
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <span className="contact-card-label">Location</span>
                <span className="contact-card-val">India • Open to Remote</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-col">
          {submitted ? (
            <div className="form-success-box">
              <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
              <h3>Thank you for reaching out!</h3>
              <p>
                Your message has been received. I will review it and get back to
                you as soon as possible.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Collaboration / Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
