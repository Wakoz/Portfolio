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
          Vous êtes curieux d'en savoir plus sur un développeur web en quête
          d'une alternance ? Venez me découvrir au travers de ces quelques pages
          qui mettent en avant mes projets et mes compétences.
        </p>
        <div className="profile-cta">
          <Link to="/projects" className="cta-button">
            Voir mes projets
          </Link>
          <Link to="about" className="cta-button">
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
