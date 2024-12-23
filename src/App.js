import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import NavBar from './navbar';
import './App.css';
import profilePic from './profile_pic.jpeg'; // Import the image from the src folder
import A11Y from './A11Y.png';
import RESEARCH_PNG from './Result_3.png';


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
            <a href="https://github.com/sivasurasani" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/siva-kumar-surasani-036a8414a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://leetcode.com/u/sivasurasani/" target="_blank" rel="noopener noreferrer">
              <FaCode size={30} />
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
