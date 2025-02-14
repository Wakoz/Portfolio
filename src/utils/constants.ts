// src/utils/constants.ts
export const PROJECTS = [
  {
    id: 1,
    title: "Wildify",
    description:
      "Une application ce basant sur le design de Spotify, faite sur un mois de travail.",
    technologies: [
      "React",
      "CSS",
      "Javascript",
      "Node.js",
      "TypeScript",
      "Express",
    ],
    image: "/Wildify.webp",
    demoLink: "",
    codeLink: "https://github.com/WildCodeSchool-2024-09/JS-Bdx-wildify",
  },
  {
    id: 2,
    title: "Wild X'mas",
    description:
      "Projet de groupe sur une jounrnée et demi sur le théme de la bienveillance.",
    technologies: [
      "React",
      "CSS",
      "Javascript",
      "TypeScript",
      "Node.js",
      "Express",
    ],
    image: "/WildXmass.webp",
    demoLink: "",
    codeLink: "https://github.com/Wakoz/Protojam",
  },
  {
    id: 3,
    title: "Wow characters traker",
    description:
      "Application permettant de suivre les personnages de World of Warcraft.",
    technologies: [
      "React",
      "CSS",
      "Javascript",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
    ],
    image: "/wowCharactersTracker.webp",
    demoLink: "",
    codeLink: "https://github.com/Wakoz/Wow-characters-traker",
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
