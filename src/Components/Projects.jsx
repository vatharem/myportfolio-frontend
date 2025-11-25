import React from "react";
import portfolioImg from "./../assets/Images/portfolio.png"; // replace with your image
import CouriorImg from "./../assets/Images/courior.png"
import AkashTechnology from "./../assets/Images/Akashtech.png"
const Projects = () => {
  const projects = [
    {
      title: "Courier Management System",
      img: CouriorImg,
      desc: "A courier tracking app with Spring Boot + React + MySQL.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/vatharem/SpringBoot_Courior_Management",
      live: "https://courier-mngt.netlify.app/",
    },
    {
      title: "Portfolio Website",
      img: portfolioImg,
      desc: "Responsive portfolio built with React and Email API.",
      tech: ["React", "CSS", "Email API"],
      github: "#",
      live: "#",
    },
    {
      title: "Website for traning center",
      img: AkashTechnology,
      desc: "Learning platform with authentication & student dashboard.",
      tech: ["Java", "Mysql", "Spring Boot"],
      github: "#",
      live: "https://bootstrapwebinstitute.netlify.app/",
    },
  ];

  return (
    <div
      className="container-fluid text-white py-5"
      style={{ backgroundColor: "#000" }}
      id="projects"
    >
      <div className="container text-center">
        <h2
          className="fw-bold mb-5"
          style={{
            color: "#00bfff",
            fontSize: "50px",
            textShadow: "0 0 15px rgba(0,153,255,0.6)",
          }}
        >
          My Projects
        </h2>

        <div className="row justify-content-center">
          {projects.map((p, index) => (
            <div
              className="col-md-4 mb-4 d-flex justify-content-center"
              key={index}
            >
              <div
                className="card bg-dark text-light shadow-lg border border-info"
                style={{
                  width: "100%",
                  maxWidth: "340px",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 25px rgba(0,153,255,0.8)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(0,153,255,0.4)")
                }
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-info">{p.title}</h5>
                  <p className="card-text small">{p.desc}</p>

                  <div className="mb-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="badge bg-info text-dark me-1"
                        style={{ fontSize: "12px" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div>
                    <a
                      href={p.github}
                      className="btn btn-outline-info btn-sm me-2"
                    >
                      🔗 GitHub
                    </a>
                    <a href={p.live} className="btn btn-info btn-sm text-dark">
                      🚀 Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
