/*import React from 'react'
import photo1 from './../assets/Images/photo1.jpeg'
import './style.css'
const About = () => {
  return (
    <div className='container-fluid mt-5'>
         <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row align-items-center justify-content-evenly">
            <div className="col-md-5 mb-4 mb-md-0 mt-5 ">
              <img
                src={photo1}
                alt="Profile"
                className="img-fluid rounded-4 shadow glow-effect " style={{height:"400px"}}
              />
            </div>
            <div className="col-md-6 text-center text-md-start text-white ">
              <h2 className="fw-bold mb-3 " style={{fontSize:"80px"}}>About Me</h2>
              <p className="fs-5">
                I’m Mayuri, a creative and detail-oriented Full Stack Developer  who combines logic, creativity, and a bit of humor to craft websites that users love. Armed with a BE degree from JCER Belagavi and expertise in Java, HTML, CSS, bootstrap,Reactjs,Javascript,MySQL,springboot. I tackle both front-end finesse and back-end brawn with equal passion.  I thrive on building
                responsive, user-friendly applications that solve real-world problems. Trained at  GenTech Academy, I bring both technical skill and creative flair to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About*/
import React from "react";
import photo1 from "./../assets/Images/photo1.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="container-fluid py-5 text-white"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(0, 153, 255, 0.2), rgba(0, 0, 0, 1) 70%)",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          {/* Image Section */}
          <div
            className="col-md-5 text-center mb-5 mb-md-0"
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "100%",
                height: "100%",
                border: "3px solid rgba(0, 153, 255, 0.5)",
                borderRadius: "20px",
                zIndex: 0,
                transform: "rotate(-30deg)",
                boxShadow: "0 0 40px rgba(0,153,255,0.3)",
              }}
            ></div>

            <img
              src={photo1}
              alt="Mayuri"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                height: "400px",
                objectFit: "cover",
                border: "2px solid rgba(0,153,255,0.6)",
                boxShadow: "10px 0 40px rgba(0,153,255,0.5)",
                transition: "0.4s",
                position: "relative",
                zIndex: 1,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 60px rgba(0,153,255,0.8)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(0,153,255,0.5)")
              }
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start m-2">
            <h2
              className="fw-bold mb-3"
              style={{
                fontSize: "60px",
                background:
                  "linear-gradient(90deg, #00bfff, #007bff, #00bfff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 15px rgba(0,153,255,0.6)",
              }}
            >
              About Me
            </h2>

            <p
              className="fs-5 lh-lg p-5"
              style={{
                color: "#cce7ff",
                textShadow: "0 0 10px rgba(0,153,255,0.2)",
              }}
            >
              I’m <strong>Mayuri</strong>, a creative and detail-oriented{" "}
              <strong>Full Stack Developer</strong> who blends logic,
              creativity, and passion to craft immersive web experiences.
              <br />
              <br />
              With a <strong>BE from JCER Belagavi</strong> and expertise in{" "}
              <em>
                Java, Spring Boot, React.js, MySQL, HTML, CSS, Bootstrap, and
                JavaScript
              </em>
              , I design responsive, user-friendly applications that connect
              innovation with impact.
              <br />
              <br />
              Trained at <strong>GenTech Academy</strong>, I bring a balance of
              clean code, sleek design, and a spark of imagination to every
              project I build.
            </p>
 
            <a  href="#contact"
              className="btn btn-outline-info mt-4 px-4 py-2 fw-bold"
              style={{
                borderRadius: "30px",
                boxShadow: "0 0 15px rgba(0,153,255,0.5)",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(0,153,255,0.9)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 15px rgba(0,153,255,0.5)")
              }
            >
              Let’s Connect 
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
