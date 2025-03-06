import "../styles/Projects.css";
import arkanoidImage from "../assets/images/arkanoid.png";
import journalImage from "../assets/images/journal.png";

const projectsData = [
  {
    id: 1,
    title: "Arkanoid Clone",
    description:
      "A classic brick-breaker arcade game built as the first milestone project during my Software Development bootcamp. This project demonstrates core front-end development skills, including DOM manipulation, collision detection, and game logic using HTML, CSS, and vanilla JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: arkanoidImage,
    githubUrl: "https://github.com/rearl89/ms-project1",
    liveUrl: "https://arkanoidproject.netlify.app/",
  },
  {
    id: 2,
    title: "Personal Journal",
    description:
      "A full-stack web application built as the final milestone project of my Software Development bootcamp. This project allows users to create and delete journal entries with secure user authentication using JWT. It showcases my experience in the MERN stack, API integration, and implementing secure signup and login functionality.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Auth", "JWT"],
    imageUrl: journalImage,
    githubUrl: "https://github.com/rearl89/ms-project3",
    liveUrl: "https://msproject3client.onrender.com",
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
