import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero" role="banner">
      <div className="hero-content">
        <figure className="hero-image">
          <img src="/photo-profil-pro.jpg" alt="Portrait de Julien" />
        </figure>
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>
          Julien, développeur web, en recherche d'une alternance je vous propose
          de parcourir mon Portfolio pour me découvrir et découvrir mes projets
          !!
        </p>
        <div className="profile-cta">
          <Link to="/projects" className="cta-button">
            Voir mes projets
          </Link>
          <a href="about" className="cta-button">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
