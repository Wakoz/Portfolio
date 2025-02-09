import "./Projects.css";
import { PROJECTS } from "../../utils/constants";
import type { Project } from "../../types/Project";

const Projects = () => {
  return (
    <section className="projects" aria-labelledby="projects-title">
      <h1 id="projects-title">Mes Projets</h1>
      <div className="projects-grid">
        {PROJECTS.map((project: Project) => (
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
      <p className="text-soon">
        D'autres projets sont à venir... Restez connectés ! 😉
      </p>
    </section>
  );
};

export default Projects;
