import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Research', target: 'research' },
  { label: 'Blogs', target: 'blogs', href: '/blog' },
  { label: 'Contact', target: 'contact' },
];

const NavBar = ({ currentPage = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isBlogPage = currentPage === 'blog';

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-inner">
        {isBlogPage ? (
          <a href="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
            Siva Kumar Surasani
          </a>
        ) : (
          <Link
            to="home"
            smooth
            duration={500}
            offset={-80}
            className="navbar-brand"
            onClick={() => setIsOpen(false)}
          >
            Siva Kumar Surasani
          </Link>
        )}

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
          {navItems.map((item) => (
            <li key={item.target}>
              {item.href ? (
                <a
                  href={item.href}
                  className={isBlogPage ? 'active' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : isBlogPage ? (
                <a href={`/#${item.target}`} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.target}
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  activeClass="active"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
