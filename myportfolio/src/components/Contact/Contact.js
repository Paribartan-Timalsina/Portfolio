import React, { useRef } from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FaGithub } from "react-icons/fa";

import edoko from "../../assets/E_DOKO logo (2).png";
import krishivue from "../../assets/krishivue.png";
import dirghayu from "../../assets/dirghayu.png";
import baagchal from "../../assets/baagchal.png";

const Contact = () => {
  const [fetchedProjects,setfetchedProjects]=useState([])
  const [loading,setLoading]=useState(true)
 
useEffect(()=>{
  const getProjects=async ()=>{
    try{
    console.log("hello")
    const response= await axios.get("http://localhost:5000/mydata/getprojects")
    if (response.status==200){
    setfetchedProjects(response.data.data)
      console.log(response.data.data)
      console.log(fetchedProjects)
    }else{
      prompt("The fetching isn't successful")
    }}
    catch(e){
      console.log(e)
    }
    finally{
      setLoading(false)
      console.log(fetchedProjects)
    }
  }
  getProjects()
},[])
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_q45pby8",
    //     "template_b6muonf",
    //     form.current,
    //     "_SG5PWYeiN43vj_fG"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  if(loading==true){
    <h1>Loading.....</h1>
  }
  return (
    <section id="contactPage">
      <div className="clients">
        <h1 className="clienttitle">My Projects</h1>
        <p className="clinetDesc">
          These are the projects that i have worked under.Some of these projects are done by me and some are built in collaboration with my friends.It was rally entertaning on working on these projects 
        </p>
      </div>

      <div className="clientsImgs">
        <div className="projects">
         
        {fetchedProjects && fetchedProjects.map((project, index) => (
  <div  className="project">
    <h1>{project.projectName}</h1>
    <img src={`http://localhost:5000/${project.image}`} alt="baagchal" className="image" />
    <p>{project.description}</p>
    <div className="githublink">
      <h2>Github</h2>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link">
        <FaGithub className="icon" />
      </a>
    </div>
  </div>
))}

            {/* <h1>Baagchal</h1>

            <img src={baagchal} alt="baagchal" className="image"></img>
            <p>
            Baagchal, also spelled Bagh Chal (Nepali: बाघ चाल), is a traditional board game originating from Nepal. It is known as "Tiger Game" or "Tigers and Goats" in English. The game is a strategic, two-player board game where one player controls four tigers and the other player controls twenty goats.
            </p>
            <div className="githublink">
              <h2>Github</h2>
              <a href="https://www.github.com/Paribartan-Timalsina" target="_blank" rel="noopener noreferrer" className='link'>
              <FaGithub className='icon' />
        </a>
            </div>
          </div>
          <div className="project">
            <h1>E-Doko</h1>
            <img src={edoko} alt="baagchal" className="image"></img>
            <p>
            E-Doko is a digital platform  that facilitates online shopping, offering a wide range of products including electronics, fashion items, household goods, and more. It operates similarly to popular e-commerce websites globally, providing a marketplace where sellers can list their products and customers can browse, compare, and purchase items conveniently through their website
            </p>
            <div className="githublink">
              <h2>Github</h2>
              <a href="https://www.github.com/Paribartan-Timalsina" target="_blank" rel="noopener noreferrer" className='link'>
              <FaGithub className='icon' />
        </a>
            </div>
          </div>
          <div className="project">
            <h1>KrishiVue</h1>
            <img src={krishivue} alt="baagchal" className="image"></img>
            <p>
            Krishivue" is an application focused on agricultural or plant-related object detection and disease classification. Such applications are typically used in agriculture to help farmers identify plant diseases early, monitor crop health, and make decisions about treatment and management.
            </p>
            <div className="githublink">
              <h2>Github</h2>
              <a href="https://www.github.com/Paribartan-Timalsina" target="_blank" rel="noopener noreferrer" className='link'>
              <FaGithub className='icon' />
        </a>
            </div>
          </div>
          <div className="project">
            <h1>Dirghayu</h1>
            <img src={dirghayu} alt="baagchal" className="image"></img>
          
            <p>
            Dirghayu is a blockchain-based healthcare website that integrates various functionalities such as appointment scheduling, storing medical records securely on the blockchain, and potentially other healthcare management features. Blockchain technology in healthcare offers benefits such as enhanced security, transparency, and interoperability of health data.
            </p>
            <div className="githublink">
              <h2>Github</h2>
              <a href="https://www.github.com/Paribartan-Timalsina" target="_blank" rel="noopener noreferrer" className='link'>
              <FaGithub className='icon' />
        </a>
            </div>
          </div> */}
        </div>
      </div>


      <div id="contact">
        <h2 className="contacttitle">Contact Me</h2>

        <span className="contactDesc">
          You can contact me by sending me mails and also by connecting with me
          in GitHub and LinkedIn.Feel free to contact me!
        </span>
        <form className="contactForm" /*ref={form}*/ onSubmit={sendEmail}>
          <input
            type="text"
            className="contactname"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="text"
            className="contactemail"
            placeholder="Email"
            name="your_email"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="contactmsg"
          ></textarea>
          <button className="submitButton">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
