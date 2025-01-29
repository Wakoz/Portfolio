// src/pages/Home/index.tsx
import Hero from "../../components/section/Hero/Hero";
import Skills from "../../components/section/Skills/Skills";
import ProjectsGrid from "../../components/section/ProjectsGrid/ProjectsGrid";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectsGrid />
    </>
  );
};

export default Home;
