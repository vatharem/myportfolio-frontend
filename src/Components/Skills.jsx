import React from 'react'

const Skills = () => {
  return (
    <div id='skills'>
         
    <section style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', color: '#00aaff', fontSize: '36px', marginBottom: '30px' }}>
          My Skills
        </h2>
        <div className="row">
          {/* Skill 1 */}
          <div className="col-md-4" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div className="skill-icon" style={{ fontSize: '50px', color: '#00aaff' }}>💻</div>
            <h4 style={{ color: '#fff', fontSize: '24px', marginTop: '15px' }}>Full Stack Development</h4>
            <p style={{ color: '#ccc' }}>
              Experienced in building dynamic web applications using Java, Spring Boot, React, and MongoDB/MySQL.
            </p>
          </div>
          {/* Skill 2 */}
          <div className="col-md-4" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div className="skill-icon" style={{ fontSize: '50px', color: '#00aaff' }}>🗄️</div>
            <h4 style={{ color: '#fff', fontSize: '24px', marginTop: '15px' }}>Database Management</h4>
            <p style={{ color: '#ccc' }}>
              Proficient in MySQL, MongoDB, and handling complex queries for data storage and management.
            </p>
          </div>
          {/* Skill 3 */}
          <div className="col-md-4" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div className="skill-icon" style={{ fontSize: '50px', color: '#00aaff' }}>⚙️</div>
            <h4 style={{ color: '#fff', fontSize: '24px', marginTop: '15px' }}>Software Engineering</h4>
            <p style={{ color: '#ccc' }}>
              Skilled in object-oriented programming, design patterns, and software development principles.
            </p>
          </div>
        </div>
        <div className="row">
          {/* Skill 4 */}
          <div className="col-md-4" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div className="skill-icon" style={{ fontSize: '50px', color: '#00aaff' }}>☁️</div>
            <h4 style={{ color: '#fff', fontSize: '24px', marginTop: '15px' }}>Cloud & Docker</h4>
            <p style={{ color: '#ccc' }}>
              Experience with Docker for containerization and cloud platforms for scalable solutions.
            </p>
          </div>
          {/* Skill 5 */}
          <div className="col-md-4" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div className="skill-icon" style={{ fontSize: '50px', color: '#00aaff' }}>🖥️</div>
            <h4 style={{ color: '#fff', fontSize: '24px', marginTop: '15px' }}>Frontend Development</h4>
            <p style={{ color: '#ccc' }}>
              Expertise in building responsive and interactive UI with HTML, CSS, and Bootstrap.
            </p>
          </div>
          {/* Skill 6 */}
          <div className="col-md-4" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div className="skill-icon" style={{ fontSize: '50px', color: '#00aaff' }}>🖧</div>
            <h4 style={{ color: '#fff', fontSize: '24px', marginTop: '15px' }}>Backend Development</h4>
            <p style={{ color: '#ccc' }}>
              Proficient in building scalable server-side applications using Java, Spring Boot, and RESTful APIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  { /* <section id="skills" className="skills-section text-white py-5">
        <div className="container">
          <h2 className="fw-bold text-blue text-center mb-4">My Skills</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="p-3 bg-transparent rounded hover-shadow border-white">
                <h5 className="text-blue">Frontend</h5>
                <ul className="list-unstyled">
                  <li>React</li>
                  <li>HTML5, CSS3, Bootstrap</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="p-3 bg-transparent rounded hover-shadow">
                <h5 className="text-blue">Backend</h5>
                <ul className="list-unstyled">
                  <li>Java (Core + EE)</li>
                  <li>Spring Boot</li>
                  <li>REST APIs</li>
                  <li>Authentication</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="p-3 bg-transparent rounded hover-shadow">
                <h5 className="text-blue">Database & Tools</h5>
                <ul className="list-unstyled">
                  <li>MySQL, MongoDB</li>
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  )
}

export default Skills