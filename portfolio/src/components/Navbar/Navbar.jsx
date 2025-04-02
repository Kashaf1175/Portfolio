import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="/log.png" alt="" />
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-icons" style={{ fontSize: '1.8rem' }}>
              {menuOpen ? 'X' : '---'}
            </span>
          </button>
          <ul className={`menu-list ${menuOpen ? 'open' : ''}`}>
            <li>
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Contact me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
