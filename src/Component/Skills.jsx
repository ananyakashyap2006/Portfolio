import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const skillsList = [
    {
      name: "HTML5",
      percent: 90,
      icon: faHtml5,
      color: "#e34f26",
      desc: "Semantic markup, accessibility, modern standards",
    },
    {
      name: "CSS3",
      percent: 85,
      icon: faCss3Alt,
      color: "#1572b6",
      desc: "Flexbox, Grid, animations, media queries",
    },
    {
      name: "JavaScript",
      percent: 75,
      icon: faJs,
      color: "#f7df1e",
      desc: "ES6+, DOM manipulation, async/await, APIs",
    },
    {
      name: "React",
      percent: 65,
      icon: faReact,
      color: "#61dafb",
      desc: "Components, Hooks, state management, SPA",
    },
    {
      name: "Python",
      percent: 70,
      icon: faPython,
      color: "#38bdf8",
      desc: "Core programming, logic building, algorithms",
    },
    {
      name: "Graphic Design",
      percent: 65,
      icon: faPaintBrush,
      color: "#f43f5e",
      desc: "Visual hierarchy, typography, UI wireframing",
    },
  ];

  const tools = [
    "Git & GitHub",
    "VS Code",
    "Vercel",
    "Responsive Design",
    "REST APIs",
    "Figma",
    "Tailwind Concepts",
  ];

  return (
    <section className="section skills" id="skills">
      <div className="section-header">
        <span className="section-badge">Technical Proficiency</span>
        <h2 className="section-title">My Skills</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Technologies, frameworks, and creative disciplines I leverage to craft
          interactive and dependable digital experiences.
        </p>
      </div>

      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <div
                className="skill-icon-wrap"
                style={{
                  color: skill.color,
                  backgroundColor: `${skill.color}18`,
                  borderColor: `${skill.color}40`,
                }}
              >
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <div className="skill-title-block">
                <h3>{skill.name}</h3>
                <span className="skill-percentage">{skill.percent}%</span>
              </div>
            </div>

            <p className="skill-desc">{skill.desc}</p>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  width: `${skill.percent}%`,
                  background: `linear-gradient(90deg, #00adb5, ${skill.color})`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="tools-card">
        <h3>Other Tools & Proficiencies</h3>
        <div className="tools-tags">
          {tools.map((tool, i) => (
            <span key={i} className="tool-tag">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
