import "../styles/Home.css";
import { NavLink } from "react-router-dom";
import rogerImage from "../assets/images/roger.png";

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
          {/* Add 2-3 featured project cards here */}
        </div>
      </section>
    </div>
  );
}

export default Home;
