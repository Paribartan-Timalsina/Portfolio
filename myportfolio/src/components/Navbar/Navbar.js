import React, { useState } from 'react'
import './navbar.css';
import mylogo from '../../assets/mylogo.jpg'
import { Link } from 'react-scroll';
import { CgHello } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const[showMenu,setshowMenu]=useState(false)
  return (
    <nav className='navbar'>
        <CgHello className='cghello'/>
        <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={1000} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skillsection' spy={true} smooth={true} offset={-50} duration={1000} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='portfoliosections' spy={true} smooth={true} offset={-50} duration={1000} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={1000} className='desktopMenuListItem'>Clients</Link>

        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({
            behavior:"smooth",
      block:"center",
      inline: "end",
          });
        }}>
        <img className='desktopMenuImg' src={mylogo} alt='ContactMe'/>ContactMe
        </button>

        {/* <img  className='mobilemenu' src=
        "hellp" alt='mylogo' onClick={()=>setshowMenu(!showMenu)}/> */}
        <div className='mobilemenu' onClick={()=>setshowMenu(!showMenu)}><GiHamburgerMenu /></div>
        <div className='navmenu' style={{display:showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skillsection' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>About</Link>
        <Link activeClass='active' to='portfoliosections' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Clients</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Contact Me</Link>
        
        </div>
    </nav>
  )
}

export default Navbar
