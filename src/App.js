import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { FaPython, FaJava, FaPhp, FaDatabase, FaJs} from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiJavascript } from 'react-icons/si';
import NavBar from './navbar';
import './App.css';
import profilePic from './profile_pic.jpeg'; // Import the image from the src folder
import A11Y from './A11Y.png';
import RESEARCH_PNG from './Result_3.png';
import Semantics from './semantics.png';
import resume from './resume.pdf'
import os_project_report from './Operating_systems_project_report.pdf'
import { FaFilePdf } from 'react-icons/fa';



function App() {
  const [popupMessage, setPopupMessage] = useState(null); // Tracks the popup message (success or error)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopupMessage(null); // Reset popup message before submission

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xannyovj', { // Replace with your Formspree form ID
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setPopupMessage('success'); // Show success popup
        e.target.reset(); // Reset the form fields
      } else {
        setPopupMessage('error'); // Show error popup
      }

      // Automatically hide the popup after 3 seconds
      setTimeout(() => {
        setPopupMessage(null);
      }, 3000);
    } catch {
      setPopupMessage('error'); // Handle any other error

      // Automatically hide the popup after 3 seconds
      setTimeout(() => {
        setPopupMessage(null);
      }, 3000);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <section id="home" className="section home-section">
        <div className="home-left">
          <p>I am currently pursuing masters in Computer Science at University of North Texas, Denton and working as a Research and Instructional Assistant with a love for creating APIS and functional websites.</p>
          <p>My expertise lies in Back-end development, working with technologies like Python, PHP, Machine Learning, Mysql, and MongoDB.</p>
          <p>I enjoy building projects that solve real-world problems and building efficient applications which are highly secure.</p>
          <p> Visit my links below to know more about me</p>
          <div className="social-links">
          <a href="https://github.com/sivasurasani" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/siva-kumar-surasani-036a8414a/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://leetcode.com/u/sivasurasani/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LeetCode">
            <FaCode size={30} />
          </a>
          <a href={resume} download="Siva_Resume.pdf" className="social-icon" title="Resume">
            <FaFilePdf size={30} />
          </a>
        </div>


        </div>
        <div className="home-right">
          <img src={profilePic} alt="Your Name" className="profile-photo" />
        </div>
      </section>

      {/* <section id="experience" className="section">
        <h1>Experience</h1>
        <p>Details about my professional experience go here.</p>
      </section> */}

      <section id="projects" className="section projects-section">
        <h1>Projects</h1>
        <div className="projects-container">
          <div className="project-card">
            <div className="project-image">
              {/* Replace with your first project image URL */}
              <img src={A11Y} alt="Accessibility ChatBot" />
            </div>
            <div className="project-info">
              <h2>Accessibility ChatBot</h2>
              <p>
                A chatbot designed to enhance accessibility by leveraging the power
                of the BERT model to provide intelligent and context-aware responses
                for developers to build accessible websites.
              </p>
              <a
                href="https://github.com/sivasurasani/A11Y-ChatBot"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={RESEARCH_PNG} alt="Project Name" />
            </div>
            <div className="project-info">
              <h2>Research paper recommendation system</h2>
              <p>
              This project is a Flask-based web application that provides research paper recommendations based on an input paper title. Users can enter a research paper title, and the app will suggest similar papers using a pre-trained recommendation model.
              </p>
              <a
                href="https://github.com/sivasurasani/research_paper_recommendation_system"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={Semantics} alt="Project Name" />
            </div>
            <div className="project-info">
              <h2>A survey on refcounting bugs</h2>
              <p>
              This survey is based on the existing work on analysing the refcounting bugs in kernel systems.
              </p>
              <a href={os_project_report} download="OS_project_report.pdf" className="social-icon" title=" Download Report">
            <FaFilePdf size={30} />
          </a>
            </div>
          </div>
          {/* <div className="project-card">
            <div className="project-image">
              <img src={RESEARCH_PNG} alt="Project Name" />
            </div>
            <div className="project-info">
              <h2>Research paper recommendation system</h2>
              <p>
              This project is a Flask-based web application that provides research paper recommendations based on an input paper title. Users can enter a research paper title, and the app will suggest similar papers using a pre-trained recommendation model.
              </p>
              <a
                href="https://github.com/sivasurasani/research_paper_recommendation_system"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          </div> */}
        </div>
      </section>
      <section id="skills" className="section skills-section">
        <h1>Best Skills</h1>
        <div className="skills-container">
          <div className="skill-card">
            <FaPython size={50} color="#3776AB" />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <FaPhp size={50} color="#f89820" />
            <p>PHP</p>
          </div>
          <div className="skill-card">
            <FaJava size={50} color="#f89820" />
            <p>Java</p>
          </div>
          <div className="skill-card">
            <GiArtificialIntelligence size={50} color="#E34F26" />
            <p>Machine Learning</p>
          </div>
          <div className="skill-card">
            <SiJavascript size={50} color="#1572B6" />
            <p>JQuery</p>
          </div>
          <div className="skill-card">
            <FaJs size={50} color="#F7DF1E" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <FaCode size={50} color="#F7DF1E" />
            <p>GoLang</p>
          </div>
          <div className="skill-card">
            <FaDatabase size={50} color="#F7DF1E" />
            <p>MongoDB</p>
          </div>
          <div className="skill-card">
            <FaDatabase size={50} color="#F7DF1E" />
            <p>Mysql</p>
          </div>
        </div>
      </section>
    <section  id="Research" className="section research-section">
    <div class="research-cards">
  <h2 class="cards-heading">Research Journey</h2>
  <div class="research-card">
    <h3>2023</h3>
    <p style={{'margin-bottom': '20px'}}>
  After starting my master's in Computer Science at the University of North Texas in 2023, I began volunteering as a Research Assistant under Dr. Wajdi Aljedaani. My research focused on accessibility, where I contributed to the development of a chatbot designed to guide developers in creating accessible websites.
</p>
<p style={{'margin-bottom': '20px'}}>
  I played an active role in web scraping data from the WCAG (Web Content Accessibility Guidelines) website and utilizing it to build a robust model. This experience was a tremendous learning opportunity, allowing me to conceptualize and implement a complete solution while deepening my understanding of accessibility principles and practical machine learning techniques.
</p>

  </div>
  <div class="research-card">
    <h3>2024</h3>
    <p style={{'margin-bottom': '20px'}}>
    In 2024, I began working under Dr. Sanjukta Bhowmick on advanced topics in graph theory. My research focuses on areas such as dynamic updates of edges and nodes in graphs, K-core decomposition, and graph anonymization.
</p>
<p style={{'margin-bottom': '20px'}}>
In the summer of 2024, I contributed to a material science project, focusing on graph theory, community detection algorithms, and data privacy. I also worked on digitizing plots and analyzing stress, strain, and work-hardening curves of alloys using Python, enhancing my technical expertise and interdisciplinary skills. Refer this github link for more details.
</p>
  </div>
</div>

    </section>

      <section id="contact" className="section contact-section">
        <p>Reach out to me!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
          <label htmlFor="email">Mobile</label>
          <input type="mobile" id="mobile" name="mobile" placeholder="Your mobile" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Additional Information</label>
          <textarea id="message" name="message" placeholder="Write your message here" rows="4"></textarea>

          <button type="submit">Submit</button>
        </form>

        {/* Popup for success or error */}
        {popupMessage === 'success' && (
          <div className="popup success-popup">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {popupMessage === 'error' && (
          <div className="popup error-popup">
            Oops! Something went wrong. Please try again later.
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
