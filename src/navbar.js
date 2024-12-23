import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Siva Kumar Surasani</div>
      <ul className="navbar-links">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Home
          </Link>
        </li>
        {/* <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Experience
          </Link>
        </li> */}
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
