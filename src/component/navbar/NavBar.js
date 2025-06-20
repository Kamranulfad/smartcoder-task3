import React, { useState } from "react";
import "./navbar.css";
import { CiAirportSign1 } from "react-icons/ci";

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <div className="icon"><CiAirportSign1 /></div>
          <p><span>We</span>Transfer</p>
        </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li className="dropdown">
            <span className="nav-link" onClick={() => toggleDropdown("features")}>
              Features
            </span>
            {activeDropdown === "features" && (
              <ul className="dropdown-menu">
                <li>File Sharing</li>
                <li>Pro Tools</li>
              </ul>
            )}
          </li>

          <li>
            <a href="#pricing" className="nav-link">Pricing</a>
          </li>

          <li className="dropdown">
            <span className="nav-link" onClick={() => toggleDropdown("usecases")}>
              Use Cases
            </span>
            {activeDropdown === "usecases" && (
              <ul className="dropdown-menu">
                <li>Freelancers</li>
                <li>Teams</li>
              </ul>
            )}
          </li>

          <li className="dropdown">
            <span className="nav-link" onClick={() => toggleDropdown("more")}>
              More
            </span>
            {activeDropdown === "more" && (
              <ul className="dropdown-menu">
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            )}
          </li>
        </ul>

        <ul className="auth-buttons">
          <li><button className="login-btn">Login</button></li>
          <li><button className="signup-btn">Sign Up</button></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
