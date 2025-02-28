import React from 'react'
import "./about.css"
import backend from  "../../assets/backend.png"
import frontend from "../../assets/frontend.jpg"
import datascientist from "../../assets/datascientist.png"

const About = () => {
  return (
    <section id="skillsection" className="about">
      <span className="skilltitle">My Skills</span><br />

      <span className="description">
        I am a Computer Engineering student with a passion for solving real-world problems through technology. 
        With hands-on experience in full-stack web development, machine learning, and blockchain technologies, 
        I strive to create innovative and efficient solutions. 
        My goal is to continue learning and contributing to projects that make an impact in the fields of AI, blockchain, and software engineering.
      </span>
      
      <div className="skillBars">
        {/* Data Scientist */}
        <div className="skillBar">
          <img src={datascientist} alt="Data Scientist" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Data Scientist & Machine Learning</h2>
            <p>
              With a deep interest in AI, I have worked extensively on machine learning and deep learning models.
              I am experienced in using frameworks like TensorFlow and PyTorch for tasks such as image recognition, 
              plant disease detection, and time series forecasting.
            </p>
          </div>
        </div>

        {/* Backend Developer */}
        <div className="skillBar">
          <img src={backend} alt="Backend Developer" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend Developer</h2>
            <p>
              I am skilled in developing robust backend systems using technologies like Node.js, Express, and Flask.
              I have experience in building APIs, integrating databases like MongoDB and MySQL, and deploying backend services.
            </p>
          </div>
        </div>

        {/* Frontend Developer */}
        <div className="skillBar">
          <img src={frontend} alt="Frontend Developer" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend Developer</h2>
            <p>
              I am proficient in building user-friendly and interactive front-end applications using React, Next.js, and Flutter.
              I am also well-versed in state management libraries like Redux, making it easy to create dynamic, responsive, and scalable UIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
