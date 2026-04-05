const ProjectCard = ({ title, desc, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="project-img" />

      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectCard;