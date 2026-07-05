import React, { useState } from 'react';
import {
  FaCode,
  FaDownload,
  FaExternalLinkAlt,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaPenNib,
  FaPaperPlane,
  FaPython,
} from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import NavBar from './navbar';
import './App.css';
import profilePic from './profile_pic.jpeg';
import A11Y from './A11Y.png';
import researchPaperImage from './Result_3.png';
import semanticsImage from './semantics.png';
import resume from './resume.pdf';
import osProjectReport from './Operating_systems_project_report.pdf';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/sivasurasani',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/siva-kumar-surasani-036a8414a/',
    icon: <FaLinkedin />,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/sivasurasani/',
    icon: <FaCode />,
  },
];

const projects = [
  {
    title: 'Grant Writing Assistant',
    description:
      'A Flask-based assistant that uses LangChain, FAISS, Google GenAI, Firestore, and PDF reasoning workflows to summarize documents, answer proposal questions, and assemble structured grant content.',
    tags: ['RAG', 'Flask', 'LLM'],
  },
  {
    title: 'Accessibility ChatBot',
    image: A11Y,
    alt: 'Screenshot of the Accessibility ChatBot project',
    description:
      'A BERT-powered assistant that helps developers understand accessibility guidance and build more inclusive web experiences.',
    tags: ['BERT', 'Accessibility', 'NLP'],
    href: 'https://github.com/sivasurasani/A11Y-ChatBot',
    cta: 'View code',
  },
  {
    title: 'Research Paper Recommendation System',
    image: researchPaperImage,
    alt: 'Screenshot of a research paper recommendation system',
    description:
      'A Flask application that recommends similar papers from an input title using a trained recommendation model.',
    tags: ['Flask', 'Python', 'ML'],
    href: 'https://github.com/sivasurasani/research_paper_recommendation_system',
    cta: 'View code',
  },
  {
    title: 'Survey on Refcounting Bugs',
    image: semanticsImage,
    alt: 'Preview image for a refcounting bug survey report',
    description:
      'A systems research survey analyzing refcounting bugs in kernel systems and their implications for reliability.',
    tags: ['Systems', 'Research', 'Kernel'],
    href: osProjectReport,
    cta: 'Download report',
    download: 'OS_project_report.pdf',
  },
];

const skills = [
  { name: 'Python', icon: <FaPython />, tone: 'blue' },
  { name: 'Machine Learning', icon: <GiArtificialIntelligence />, tone: 'red' },
  { name: 'Agentic AI', icon: <FaCode />, tone: 'green' },
];

const researchTimeline = [
  {
    year: '2023',
    title: 'Accessibility Research',
    details:
      'Started research at the University of North Texas with Dr. Wajdi Aljedaani, scraping WCAG guidance and contributing to an accessibility chatbot for web developers.',
  },
  {
    year: '2024',
    title: 'Graph Theory and Materials Data',
    details:
      'Worked with Dr. Sanjukta Bhowmick on dynamic graph updates, k-core decomposition, graph anonymization, community detection, and Python-based analysis of alloy stress-strain curves.',
  },
  {
    year: '2025',
    title: 'RAG, Graphs, and Scientific AI',
    details:
      'Built RAG workflows with LangChain, OpenAI, Gemini, Flask, GCP, Firestore, and FAISS while continuing research in graph privacy and scientific data intelligence.',
  },
];

const blogs = [
  {
    title: 'Dynamic Time Warping for Time-Series Root Cause Analysis',
    summary:
      'A practical walkthrough of how DTW compares industrial sensor signals that shift in time, with a small Python example for anomaly investigation.',
    status: 'Read on portfolio',
    href: '#dtw-blog',
    tags: ['DTW', 'Time Series', 'Edge AI'],
  },
];

function App() {
  const [popupMessage, setPopupMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPopupMessage(null);
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://formspree.io/f/xannyovj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      setPopupMessage(response.ok ? 'success' : 'error');
      if (response.ok) {
        event.target.reset();
      }
    } catch {
      setPopupMessage('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setPopupMessage(null), 3000);
    }
  };

  return (
    <div className="App">
      <NavBar />

      <main>
        <section id="home" className="section home-section">
          <div className="home-copy">
            <p className="eyebrow">Machine Learning Engineer and backend developer</p>
            <h1>Siva Kumar Surasani</h1>
            <p className="hero-summary">
              I build edge AI systems, secure backend APIs, and applied machine learning tools
              for industrial sensor data, research workflows, and production software.
            </p>
            <div className="hero-details">
              <span>Machine Learning Engineer at Micro.AI</span>
              <span>Python, Go, Flask, React.js</span>
              <span>Edge AI and RAG Systems</span>
            </div>
            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                View projects
              </a>
              <a href={resume} download="Siva_Resume.pdf" className="secondary-button">
                <FaDownload aria-hidden="true" />
                Resume
              </a>
            </div>
            <div className="social-links" aria-label="Social profiles">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="profile-wrap">
            <img src={profilePic} alt="Siva Kumar Surasani" className="profile-photo" />
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects</h2>
          </div>
          <div className="projects-container">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                {project.image ? (
                  <div className="project-image">
                    <img src={project.image} alt={project.alt} />
                  </div>
                ) : (
                  <div className="project-image project-placeholder" aria-hidden="true">
                    <span>{project.title}</span>
                  </div>
                )}
                <div className="project-info">
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.href && (
                    <a
                      href={project.href}
                      target={project.download ? undefined : '_blank'}
                      rel={project.download ? undefined : 'noopener noreferrer'}
                      download={project.download}
                      className="text-link"
                    >
                      {project.download ? <FaFilePdf aria-hidden="true" /> : <FaExternalLinkAlt aria-hidden="true" />}
                      {project.cta}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p className="eyebrow">Technical toolkit</p>
            <h2>Skills</h2>
          </div>
          <div className="skills-container">
            {skills.map((skill) => (
              <div className={`skill-card ${skill.tone}`} key={skill.name}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="research" className="section research-section">
          <div className="section-heading">
            <p className="eyebrow">Academic work</p>
            <h2>Research Journey</h2>
          </div>
          <div className="research-timeline">
            {researchTimeline.map((item) => (
              <article className="research-card" key={item.year}>
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="blogs" className="section blogs-section">
          <div className="section-heading">
            <p className="eyebrow">Read my blogs</p>
            <h2>Technical Writing</h2>
          </div>
          <div className="blog-list">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.title}>
                <div className="blog-icon" aria-hidden="true">
                  <FaPenNib />
                </div>
                <div className="blog-content">
                  <div className="tag-row">
                    {blog.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>
                  <a className="text-link" href={blog.href}>
                    {blog.status}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="dtw-blog" className="section blog-article-section">
          <article className="blog-article">
            <p className="eyebrow">Blog</p>
            <h2>Dynamic Time Warping for Time-Series Root Cause Analysis</h2>
            <p className="article-lead">
              Industrial systems generate continuous sensor streams: temperature, vibration,
              pressure, flow rate, motor current, and other signals. When a machine behaves
              abnormally, the key question is not only whether something changed, but which
              signal changed first and how closely that behavior matches a known fault pattern.
            </p>

            <h3>Why DTW Helps</h3>
            <p>
              Dynamic Time Warping compares the shape of two time-series signals even when one
              signal is delayed, stretched, or compressed in time. This matters because two
              machines can show the same physical behavior at slightly different speeds.
            </p>
            <p>
              A strict point-by-point comparison may treat those signals as very different. DTW
              can align similar shapes across shifted timestamps, which makes it useful for
              comparing sensor behavior during startup, load changes, and early fault patterns.
            </p>

            <h3>A Simple Example</h3>
            <p>
              In this example, the observed signal follows the healthy pattern, but the rise is
              delayed. DTW gives us a flexible similarity score for that shifted behavior.
            </p>
            <pre>
              <code>{`def dtw_distance(series_a, series_b):
    n = len(series_a)
    m = len(series_b)

    dp = [[float("inf")] * (m + 1) for _ in range(n + 1)]
    dp[0][0] = 0

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            cost = abs(series_a[i - 1] - series_b[j - 1])
            dp[i][j] = cost + min(
                dp[i - 1][j],
                dp[i][j - 1],
                dp[i - 1][j - 1],
            )

    return dp[n][m]


healthy = [1, 2, 3, 5, 6, 5, 3, 2, 1]
observed = [1, 1, 2, 3, 5, 6, 5, 3, 2, 1]
fault_pattern = [1, 2, 4, 8, 9, 7, 4, 2, 1]

print("Healthy vs observed:", dtw_distance(healthy, observed))
print("Fault vs observed:", dtw_distance(fault_pattern, observed))`}</code>
            </pre>

            <h3>Using DTW for Root Cause Analysis</h3>
            <p>
              In a real industrial system, we usually compare many synchronized sensor streams.
              When an anomaly appears, each stream can be compared against historical healthy
              behavior and known fault signatures. The sensors with the largest deviation from
              healthy behavior, or the closest match to a known fault, become strong root cause
              candidates.
            </p>
            <ol>
              <li>Collect a recent sensor window around the anomaly.</li>
              <li>Normalize each stream so scale differences do not dominate the score.</li>
              <li>Compare each stream with healthy baselines using DTW.</li>
              <li>Compare each stream with known fault signatures.</li>
              <li>Rank sensors by distance and timing of deviation.</li>
            </ol>

            <h3>Why This Matters on Edge Devices</h3>
            <p>
              In edge AI systems, latency and bandwidth matter. A lightweight DTW workflow can
              run close to the machine, identify suspicious sensor channels, and send useful
              summaries upstream instead of streaming everything to the cloud.
            </p>

            <h3>Final Thoughts</h3>
            <p>
              DTW is practical because machines do not always fail on a perfectly aligned
              timeline. When combined with anomaly detection, known fault signatures, and edge
              deployment, it helps move from detecting a problem to explaining where that
              problem likely started.
            </p>
          </article>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Reach out to me</h2>
              <p>
                Send a project, research, or collaboration note and I will get back to you.
              </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />

              <label htmlFor="mobile">Mobile</label>
              <input type="tel" id="mobile" name="mobile" placeholder="Your mobile number" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message here" rows="5" />

              <button type="submit" disabled={isSubmitting}>
                <FaPaperPlane aria-hidden="true" />
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>

          {popupMessage === 'success' && (
            <div className="popup success-popup" role="status">
              Thank you. Your message has been sent.
            </div>
          )}
          {popupMessage === 'error' && (
            <div className="popup error-popup" role="alert">
              Something went wrong. Please try again later.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
