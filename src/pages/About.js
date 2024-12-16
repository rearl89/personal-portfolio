import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <section className="bio-section">
        <h2>Bio</h2>
        <p>
          Hi, I'm Roger Earl. I'm a full-stack web developer based in San Diego,
          CA. I recently completed a software engineering bootcamp and am
          passionate about creating meaningful web applications.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
