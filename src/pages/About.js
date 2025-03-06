import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <section className="bio-section">
        <h2>Bio</h2>
        <p>
          Hi, I'm Roger Earl, a front-end-focused full-stack web developer based
          in San Diego, CA. I have a passion for building user-friendly and
          visually appealing web applications, specializing in React.
        </p>
        <p>
          I recently completed a 10-month software development bootcamp at SDSU,
          where I learned from industry professionals and gained hands-on
          experience with modern web technologies. In addition to my bootcamp
          projects, I developed a product quality testing database for my
          current manufacturing company, applying my skills to real-world
          problem-solving.
        </p>
        <p>
          Currently, I'm expanding my expertise by learning Python and Django.
          I'm actively seeking an internship as a stepping stone to a career in
          front-end or full-stack development, with a particular interest in
          e-commerce applications.
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
