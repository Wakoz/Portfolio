const ProjectsGrid = () => {
  return (
    <section className="featured-projects">
      <h2>Projets phares</h2>
      <div className="projects-grid">
        <article className="project-card">
          <img src="/src/assets/Wildify.png" alt="Project 1" />
          <h3>Projet Wildify</h3>
          <p>Projet scolaire sur une reproduction de Spotify</p>
          <a
            href="https://github.com/WildCodeSchool-2024-09/JS-Bdx-wildify"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Voir le projet
          </a>
        </article>

        <article className="project-card">
          <img src="/src/assets/Wild X'mass.png" alt="Project 2" />
          <h3>Protojam Wild X'mass</h3>
          <p>Projet scolaire sur le thème de la bienveillance</p>
          <a
            href="https://github.com/Wakoz/Protojam"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Voir le projet
          </a>
        </article>
      </div>
    </section>
  );
};

export default ProjectsGrid;
