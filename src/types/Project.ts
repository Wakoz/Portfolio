export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: readonly string[];
  image: string;
  demoLink: string;
  codeLink: string;
};
