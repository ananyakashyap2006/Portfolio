import React from 'react';
import '../App.css';
function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <p className="skills-subtitle">
        Technologies and creative skills I use to build modern digital experiences.
      </p>

      <div className="skills-container">

        <div className="skill-card">
          <h3>HTML</h3>
          <div className="skill-bar">
            <div className="skill-progress html"></div>
          </div>
          <span>90%</span>
        </div>

        <div className="skill-card">
          <h3>CSS</h3>
          <div className="skill-bar">
            <div className="skill-progress css"></div>
          </div>
          <span>85%</span>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
          <div className="skill-bar">
            <div className="skill-progress javascript"></div>
          </div>
          <span>75%</span>
        </div>

        <div className="skill-card">
          <h3>React</h3>
          <div className="skill-bar">
            <div className="skill-progress react"></div>
          </div>
          <span>80%</span>
        </div>

        <div className="skill-card">
          <h3>UI/UX Design</h3>
          <div className="skill-bar">
            <div className="skill-progress uiux"></div>
          </div>
          <span>85%</span>
        </div>

        <div className="skill-card">
          <h3>Graphic Design</h3>
          <div className="skill-bar">
            <div className="skill-progress graphic"></div>
          </div>
          <span>80%</span>
        </div>

      </div>
    </section>
  );
}

export default Skills;