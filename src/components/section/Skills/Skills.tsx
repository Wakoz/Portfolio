import { SKILLS } from "../../../utils/constants";

const Skills = () => {
  return (
    <section className="skills">
      <h2>Mes compétences principales</h2>
      <ul className="skills-list">
        {SKILLS.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
