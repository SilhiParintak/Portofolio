import ProjectCard from "../components/ProjectCard";

const Portfolio = ({ projects }) => {
  return (
    <div className="section">
      <h1>Portfolio</h1>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          desc={project.desc}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Portfolio;