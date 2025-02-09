// src/utils/constants.ts
export const PROJECTS = [
  {
    id: 1,
    title: "Wildify",
    description:
      "Une application ce basant sur le design de Spotify, faite sur un mois de travail.",
    technologies: ["React", "CSS", "Javascript", "Node.js", "TypeScript"],
    image: "/Wildify.png",
    demoLink: "",
    codeLink: "https://github.com/WildCodeSchool-2024-09/JS-Bdx-wildify",
  },
  {
    id: 2,
    title: "Wild X'mas",
    description:
      "Projet de groupe sur une jounrnée et demi sur le théme de la bienveillance.",
    technologies: ["React", "CSS", "Javascript", "TypeScript", "Node.js"],
    image: "/WildXmass.png",
    demoLink: "",
    codeLink: "https://github.com/Wakoz/Protojam",
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
