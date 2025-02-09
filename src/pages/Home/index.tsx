// src/pages/Home/index.tsx
import Hero from "../../components/section/Hero/Hero";
import ProjectsGrid from "../../components/section/ProjectsGrid/ProjectsGrid";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <ProjectsGrid />
    </>
  );
};

export default Home;
