import React from 'react';
import './intro.css';
import myImage from "../../assets/image.jpg";
import { Link } from 'react-scroll';
import {motion} from "framer-motion"
import displayPDF from '../PDF/DisplayPDF';
const Intro = () => {
  const gotoResume=()=>{
    window.open('http://localhost:5000/uploads/Paribartan_Resume.pdf', '_blank');
  }
  return (
    <div id='intro'>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm 
      
        {/* <span className='myName'> */}
        <motion.h2 className='myName'
        initial={{x:-1}}
        animate={{x:[-1000,-1000,0]}}
        transition={{
          duration:"1",
          delay:"0"
        }}
        whileHover={{scale:"0.9",opacity:0.5}}>
        Paribartan Timalsina
        </motion.h2>
        {/* </span> */}
        <br /><br/> Welcome to my Website</span><br />
        <p className='introPara'>

        I am an enthusiastic developer who is learning the basics of JavaScript, along with the comprehension of machine learning and deep learning with neural networks.<br/> <br/>

        I have a keen interest in exploring the intersection of technology and intelligence, aiming to build innovative solutions that leverage the power of data and algorithms. My journey includes diving deep into the intricacies of programming languages, frameworks, and tools that drive modern software development.<br/><br/>

        Additionally, I am passionate about contributing to projects that solve real-world problems, constantly seeking opportunities to collaborate and learn from others in the tech community. Whether it's building responsive web applications or designing complex neural network models, I am dedicated to pushing the boundaries of what technology can achieve.</p>
        <button className='btn' onClick={()=>gotoResume()}><h2>See Resume</h2></button>
      </div>
      <img src={myImage} alt="myimage" className="bg" />
    </div>
  );
}

export default Intro;
