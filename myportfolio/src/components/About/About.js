import React from 'react'
import "./about.css"
import backend from  "../../assets/backend.png"
import  frontend from "../../assets/frontend.jpg"
import datascientist from "../../assets/datascientist.png"

const About = () => {
  return (
  <section id="skillsection" className="about">
    <span className="skilltitle">My Skills</span><br/>

    <span className="description">I am a skilled web designer with a lot of confidence and hardwork here to change the world</span>
    <div className="skillBars">
        <div className="skillBar">
            <img src={datascientist} alt="myimg" className="skillBarImg" />
       <div className="skillBarText">
        <h2>Data Scientist</h2>
        <p>I have a good exposure to machine learning and deep learning</p>
       </div>
        </div>
        <div className="skillBar">
            <img src={backend} alt="myimg" className="skillBarImg" />
       <div className="skillBarText">
        <h2>Backend Developer</h2>
        <p>I am a skilled backend developer with skills of nodejs</p>
       </div>
        </div>
        <div className="skillBar">
            <img src={frontend} alt="myimg" className="skillBarImg" />
       <div className="skillBarText">
        <h2>Frontend Developer</h2>
        <p>I am an intermediate frontend developer with knowldege of Reactjs and Flutter</p>
       </div>
        </div>
    </div>
  </section>
  )
}

export default About
