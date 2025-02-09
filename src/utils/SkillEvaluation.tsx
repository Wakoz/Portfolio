type SkillLevel = 1 | 2 | 3 | 4 | 5;

interface Skill {
  skill: string;
  level: SkillLevel;
}

const SkillsEvaluation = () => {
  const skillLevels: Skill[] = [
    {
      skill: "HTML",
      level: 4,
    },
    {
      skill: "CSS",
      level: 3,
    },
    {
      skill: "React",
      level: 3,
    },
    {
      skill: "JavaScript",
      level: 4,
    },
    {
      skill: "TypeScript",
      level: 2,
    },
    {
      skill: "MySQL",
      level: 3,
    },
    {
      skill: "Node.js",
      level: 2,
    },
  ];

  const renderDots = (level: SkillLevel): JSX.Element[] => {
    return Array(5)
      .fill(null)
      .map((_, position) => (
        <div
          key={`dot-${level}-${position}-${Math.random()}`}
          className={`level-dot ${position < level ? "filled" : "empty"}`}
        />
      ));
  };

  return (
    <div className="skills-evaluation">
      <h2>Niveau de compétences</h2>
      <div className="skills-container">
        {skillLevels.map((item) => (
          <div key={item.skill} className="skill-item">
            <span>{item.skill}</span>
            <div className="skill-dots">{renderDots(item.level)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsEvaluation;
