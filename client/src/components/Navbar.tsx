import React, { useState } from 'react';
import './Navbar.css';
import { RiSearchLine } from 'react-icons/ri';
import { TbGardenCart } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiMessageSquare } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const currentPath = window.location.pathname;

  const links = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/Marketplace" },
    { name: "Auctions", path: "/Auctions" },
    { name: "Drop", path: "/Drop" }
  ];

  return (
    <nav className="navbar">

      <div className="navbar-desktop">
        <div className="navbar-logo">ARTSY.</div>
        <ul className="navbar-links">
          {links.map(link => (
            <li key={link.name}>
              <a 
                href={link.path} 
                className={currentPath === link.path ? "active" : ""}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-icons">
          <span className="icon" title="Search"><RiSearchLine /></span>
          <span className="icon" title="Cart"><TbGardenCart /></span>
          <span className="icon" title="Notifications"><IoNotificationsOutline /></span>
        </div>
      </div>

      <div className="navbar-mobile">
        {!menuOpen && <RxHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />}
        <div className="navbar-logo">ARTSY.</div>
        <div className="navbar-icons">
          <span className="icon" title="Cart"><RiSearchLine /></span>
          <span className="icon" title="Notifications"><TbGardenCart /></span>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-overlay-header">
            <div className="navbar-logo">ARTSY.</div>
            <IoMdClose className="close-icon" onClick={toggleMenu} />
          </div>
          <ul className="mobile-overlay-links">
            {links.map(link => (
              <li key={link.name}>
                <a 
                  href={link.path} 
                  className={currentPath === link.path ? "active" : ""}
                  onClick={() => setMenuOpen(false)} 
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="/messages" className="mobile-floating-icon">
          <FiMessageSquare />
          </a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
