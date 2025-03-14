import "./About.css";
import { SKILLS } from "../../utils/constants";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiMysql } from "react-icons/si";
import SkillsEvaluation from "../../utils/SkillEvaluation";
import CVDownloadButton from "../../utils/CvDownload/CvDownload";

const getSkillIcon = (skill: string) => {
  switch (skill.toLowerCase()) {
    case "html":
      return <FaHtml5 className="skill-icon" />;
    case "css":
      return <FaCss3Alt className="skill-icon" />;
    case "javascript":
      return <FaJs className="skill-icon" />;
    case "typescript":
      return <SiTypescript className="skill-icon" />;
    case "react":
      return <FaReact className="skill-icon" />;
    case "node.js":
      return <FaNodeJs className="skill-icon" />;
    case "mysql":
      return <SiMysql className="skill-icon" />;
    default:
      return null;
  }
};

const About = () => {
  return (
    <section className="about" aria-labelledby="about-title">
      <h1 id="about-title">À propos de moi</h1>

      <div className="skills-grid">
        {/* Tableau de gauche */}
        <SkillsEvaluation />

        {/* Contenu central */}
        <div className="content-center">
          <div className="about-section">
            <p>
              Aujourd'hui, mon expérience et ma formation m'ont permis de
              construire ma vision : "Donner vie aux rêves".
            </p>

            <p>
              En suivant une démarche rigoureuse, je crois pouvoir rendre
              réelles les idées des clients.
            </p>

            <p>
              Mais je peux m'améliorer encore et approfondir mes compétences
              pour répondre, toujours au plus juste, aux besoins et projets de
              ces professionnels.
            </p>
            <p>
              Et pour ce faire, j'ai besoin d'une entreprise qui sera en mesure
              de m'accompagner et de me fournir les outils pour perfectionner ma
              pratique au travers d'une alternance.
            </p>
            <p>
              C'est aussi grâce à mon professionnalisme et ma soif d'apprendre
              que je sais pouvoir rendre profitable, à tous, ce partenariat.
            </p>
          </div>

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
            </div>
          </div>

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
              <CVDownloadButton />
            </div>
          </div>
        </div>

        {/* Tableau de droite */}
        <aside className="skills-sidebar">
          <div className="skills-container">
            <h2>Languages acquis</h2>
            {SKILLS.map((skill) => (
              <div key={skill} className="skill-item">
                {getSkillIcon(skill)}
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};
export default About;
