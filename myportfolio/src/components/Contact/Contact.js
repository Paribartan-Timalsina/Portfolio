import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FaGithub } from "react-icons/fa";

import edoko from "../../assets/E_DOKO logo (2).png";
import krishivue from "../../assets/krishivue.png";
import dirghayu from "../../assets/dirghayu.png";
import baagchal from "../../assets/baagchal.png";

const Contact = () => {
  const [fetchedProjects, setFetchedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        console.log("Fetching projects...");
        const response = await axios.get("http://localhost:5000/mydata/getprojects");
        if (response.status === 200) {
          setFetchedProjects(response.data.data);
          console.log(response.data.data);
        } else {
          prompt("The fetching isn't successful");
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  // For sending email via EmailJS
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q45pby8",
        "template_b6muonf",
        form.current,
        "_SG5PWYeiN43vj_fG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section id="contactPage">
      <div className="clients">
        <h1 className="clienttitle">My Projects</h1>
        <p className="clinetDesc">
          These are the projects that I have worked on. Some of these projects
          were done by me, and some were built in collaboration with my friends.
          It was really entertaining working on these projects.
        </p>
      </div>

      <div className="clientsImgs">
        <div className="projects">
          {fetchedProjects &&
            fetchedProjects.map((project, index) => (
              <div className="project" key={index}>
                <h1>{project.projectName}</h1>
                <img
                  src={`http://localhost:5000/${project.image}`}
                  alt={project.projectName}
                  className="image"
                />
                <p>{project.description}</p>
                <div className="githublink">
                  <h2>Github</h2>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <FaGithub className="icon" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div id="contact">
        <h2 className="contacttitle">Contact Me</h2>

        <span className="contactDesc">
          You can contact me by sending me emails and also by connecting with
          me on GitHub and LinkedIn. Feel free to contact me!
        </span>

        {/* Email Form */}
        <form
          className="contactForm"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="contactname"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
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
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
