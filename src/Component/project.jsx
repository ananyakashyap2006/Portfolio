import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Interactive Tic-Tac-Toe",
      category: "React Web App",
      emoji: "🎮",
      description:
        "A responsive and engaging Tic-Tac-Toe game developed with React. Features real-time state tracking, interactive win detection, and responsive styling.",
      tags: ["React", "CSS3", "Game Logic", "Vercel"],
      liveUrl: "https://tic-tac-toe-chi-nine-95.vercel.app/",
      githubUrl: "https://github.com/ananyakashyap2006",
      featured: true,
    },
    {
      id: 2,
      title: "Modern Developer Portfolio",
      category: "Personal Showcase",
      emoji: "💻",
      description:
        "A personal developer portfolio built with React 19, Vite, and modular CSS. Highlights responsive layouts, dark aesthetics, and interactive components.",
      tags: ["React 19", "Vite", "Modern CSS", "FontAwesome"],
      liveUrl: "#home",
      githubUrl: "https://github.com/ananyakashyap2006",
      featured: false,
    },
    {
      id: 3,
      title: "Online Store UI",
      category: "E-Commerce Design",
      emoji: "🛒",
      description:
        "A sleek e-commerce storefront UI tailored for optimal user experience, product browsing, category filtering, and responsive mobile shopping.",
      tags: ["JavaScript", "UI/UX", "Flexbox/Grid", "Responsive"],
      liveUrl: "https://github.com/ananyakashyap2006",
      githubUrl: "https://github.com/ananyakashyap2006",
      featured: false,
    },
  ];

  return (
    <section className="section project" id="project">
      <div className="section-header">
        <span className="section-badge">Recent Creations</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Explore a selection of projects that showcase my frontend problem-solving,
          clean code structure, and design principles.
        </p>
      </div>

      <div className="project-container">
        {projects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <div className="project-card-top">
              <div className="project-icon-badge">{proj.emoji}</div>
              <span className="project-category">{proj.category}</span>
            </div>

            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>

            <div className="project-tags">
              {proj.tags.map((tag, i) => (
                <span className="project-tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={proj.liveUrl}
                target={proj.liveUrl.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="btn btn-project-live"
              >
                <span>Live Demo</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-project-code"
                aria-label={`Source code for ${proj.title}`}
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="project-cta-banner">
        <div>
          <h3>Interested in collaborating on a project?</h3>
          <p>I'm always excited to contribute to innovative ideas and web apps.</p>
        </div>
        <a href="#contact" className="btn btn-primary">
          Let's Work Together
        </a>
      </div>
    </section>
  );
}

export default Project;
