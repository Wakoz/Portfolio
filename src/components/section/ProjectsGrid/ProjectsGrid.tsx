import { PROJECTS } from "../../../utils/constants";

const ProjectsGrid = () => {
  return (
    <section className="featured-projects">
      <h2>Projets phares</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="technology-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Voir le projet
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
export default ProjectsGrid;
