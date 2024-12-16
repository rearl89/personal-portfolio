import "../styles/Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "Description of project one",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/path-to-image",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
  },
  // Add more projects here
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image"
      />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
