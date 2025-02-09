import "./About.css";
import { SKILLS } from "../../utils/constants";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiMysql } from "react-icons/si";
import SkillsEvaluation from "../../utils/SkillEvaluation";

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
            <h2>Qui suis-je ?</h2>
            <p>
              Développeur web passionné, actuellement en reconversion
              professionnelle. Je suis à la recherche d'une alternance pour
              continuer à développer mes compétences et contribuer à des projets
              innovants.
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
            </div>
          </div>
        </div>

        {/* Tableau de droite */}
        <aside className="skills-sidebar">
          <h2>Languages acquis</h2>
          <div className="skills-container">
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
