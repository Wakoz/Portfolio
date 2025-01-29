import "./Projects.css";
import type { Project } from "../../types/Project";

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Wildify",
      description:
        "Une application ce basant sur le design de Spotify, faite sur un mois de travail.",
      technologies: ["React", "CSS", "Javascript", "Node.js", "TypeScript"],
      image: "/Wildify.png",
      demoLink: "",
      codeLink: "https://github.com/WildCodeSchool-2024-09/JS-Bdx-wildify",
    },
    {
      id: 2,
      title: "Protojam Wild X'mass",
      description:
        "Un projet fait en un jour et demis sur le thème de la bienveillance.",
      technologies: ["React", "CSS", "JavaScript", "TypeScript"],
      image: "/Wild X'mass.png",
      demoLink: "",
      codeLink: "https://github.com/Wakoz/Protojam",
    },
  ];

  return (
    <section className="projects" aria-labelledby="projects-title">
      <h1 id="projects-title">Mes Projets</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <img src={project.image} alt={`Aperçu de ${project.title}`} />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="technologies">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Voir la démo
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Code source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
