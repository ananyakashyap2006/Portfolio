  import React from "react"; 
  import "../App.css"; 
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
  import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
   import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    function Contact() {
       return ( 
       <section className="contact" id="contact"> 
       <h2>Contact Me</h2> 
       <p className="contact-text">
         Have a project in mind? Let's create something amazing together. </p> 
         <form className="contact-form"> 
          <input type="text" placeholder="Your Name" required /> 
          <input type="email" placeholder="Your Email" required /> 
          <textarea placeholder="Your Message" rows="5" required ></textarea> 
          <button type="submit"> Send Message </button> </form> 
          <div className="contact-icons">
          <a href ="https://www.Github.com/" target="_blank">
             <FontAwesomeIcon icon={faGithub} /></a>
             <a href ="https://www.Linkedin.com/" target="_blank">
             <FontAwesomeIcon icon={faLinkedin} /></a>
             <a href ="https://www.Envelope.com/" target="_blank">
             <FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
      </section> 
   ); 
  } 
  export default Contact;