import "./About.css";

const About = () => {
  return (
    <section className="about" aria-labelledby="about-title">
      <h1 id="about-title">À propos de moi</h1>

      <div className="about-content">
        {/* Section présentation */}
        <div className="about-section">
          <h2>Qui suis-je ?</h2>
          <p>
            Développeur web passionné, actuellement en reconversion
            professionnelle. Je suis à la recherche d'une alternance pour
            continuer à développer mes compétences et contribuer à des projets
            innovants.
          </p>
        </div>

        {/* Section parcours */}
        <div className="about-section">
          <h2>Mon parcours</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="date">2024</span>
              <div className="timeline-content">
                <h3>Formation Développeur Web</h3>
                <p>Wild Code School - Bordeaux</p>
              </div>
            </div>
            {/* Ajoutez d'autres éléments de timeline selon votre parcours */}
          </div>
        </div>

        {/* Section contact */}
        <div className="about-section contact">
          <h2>Me contacter</h2>
          <div className="contact-links">
            <a
              href="mailto:julien.cartron.pro@gmail.com"
              className="contact-link"
            >
              Email
            </a>
            <a
              href="https://github.com/Wakoz"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/julien-cartron-747559330/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
