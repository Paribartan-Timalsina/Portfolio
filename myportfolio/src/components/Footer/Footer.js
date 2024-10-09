import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
  <div className='connections'>
    <div>
      <a href="https://www.linkedin.com/in/paribartan-timalsina-5b43742b9/" target="_blank" rel="noopener noreferrer" className='link'>
        <AiFillLinkedin className='icon' />
      </a>
      <a href="https://www.github.com/Paribartan-Timalsina" target="_blank" rel="noopener noreferrer" className='link'>
        <FaGithub className='icon' />
      </a>

    </div>

    <div className='footer'><h2>Paribartan Timalsina(@2024 all rights reserved)</h2></div>
    </div>
  );
}

export default Footer;
