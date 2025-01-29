// src/utils/constants.ts
export const PROJECTS = [
  {
    id: 1,
    title: "Wildify",
    description:
      "Une application ce basant sur le design de Spotify, faite sur un mois de travail.",
    technologies: ["React", "CSS", "Javascript", "Node.js", "TypeScript"],
    image: "../../public/Wildify.png",
    demoLink: "",
    codeLink: "https://github.com/WildCodeSchool-2024-09/JS-Bdx-wildify",
  },
  // ...autres projets
] as const;

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "MySQL",
] as const;
