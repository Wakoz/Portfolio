import type { Project } from "../../types/Project";
import Button from "./Button";
import OptimizedImage from "./OptimizedImage";
import { useDevice } from "../../hooks/useDevice";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { isMobile } = useDevice();

  return (
    <article className="project-card">
      <OptimizedImage
        src={project.image}
        alt={`Aperçu de ${project.title}`}
        className="project-image"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.codeLink && (
        <Button
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isMobile ? "Voir" : "Voir le projet"}
        </Button>
      )}
    </article>
  );
};

export default ProjectCard;
