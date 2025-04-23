import "../styles/Home.css";
import { NavLink } from "react-router-dom";
import rogerImage from "../assets/images/roger.png";
import teckdbImage from "../assets/images/teckdb.png";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Roger Earl</h1>
        <img src={rogerImage} alt="Roger Earl" className="profile-image" />
        <h2>Full Stack Web Developer</h2>
        <p className="intro-text">
          Crafting intuitive web experiences while bridging the gap between
          industrial processes and digital solutions
        </p>
        <div className="cta-buttons">
          <NavLink to="/projects" className="cta-button primary">
            View My Work
          </NavLink>
          <NavLink to="/about" className="cta-button secondary">
            About Me
          </NavLink>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Projects</h2>
        <div className="featured-grid">
          <div className="project-card">
            <img src={teckdbImage} alt="TeckDB" className="project-image" />
            <div className="project-info">
              <h3>TeckDB</h3>
              <p>
                A full-stack web application for managing test results with CRUD
                operations.
              </p>
              <div className="tech-stack">
                {["MongoDB", "Express", "React", "Node.js"].map(
                  (tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/rearl89/teckdb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://teckdb-client.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
